import Dashboard from "@/components/dashboard"
export default function Home() {
	return (
		<div className="w-full flex flex-col items-center p-10 gap-5">
			<h1 className="text-3xl mx-auto">Work Description Generator</h1>
			<Dashboard />
		</div>
	)
}
