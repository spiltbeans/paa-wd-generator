import mime from "mime";
import { join } from "path";
import { rename, mkdir, writeFile, readFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	const formData = await request.formData();
	const file = formData.get("file") as Blob | null;

	if (!file) {
		return NextResponse.json(
			{ error: "File blob is required." },
			{ status: 400 }
		);
	}

	const buffer = Buffer.from(await file.arrayBuffer());
	const uploadDir = join(process.cwd(), "public", `/uploads/client_info`);

	const mkdir_status = (await mkdir(uploadDir, { recursive: true })
		.catch((e: any) => (e.code === "EEXIST"))) ?? true

	if (!mkdir_status) {
		return NextResponse.json(
			{ error: "Something went wrong creating file path." },
			{ status: 500 }
		);
	}

	const filepath = `${uploadDir}/1.${mime.getExtension(file.type)}`

	const read_status = await readFile(filepath)
		.then(r => true)
		.catch(r => false)

	try {
		if (read_status) {
			const record_filepath = `${uploadDir}/2.${mime.getExtension(file.type)}`
			await rename(filepath, record_filepath)
		}
		await writeFile(filepath, buffer);
		return NextResponse.json({});

	} catch (e: any) {
		return NextResponse.json(
			{ error: "Something went wrong writing file." },
			{ status: 500 }
		);
	}
}

// export async function GET(request: NextRequest) {
// 	return new Response(

// 	)
// }