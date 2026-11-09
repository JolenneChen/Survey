import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <div className=" h-screen w-full flex justify-around items-center">
      <div className="bg-[#dadada] text-black p-8">
        <p>Job Survey</p>
        <form action="get" className="flex flex-col gap-2">
          <div className="text-black">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"  />
          </div>
          <div className="text-black">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-3" />
          </div>
          <div className="text-black">
            <label htmlFor="phone">Phone </label>
            <input type="tel" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div className="text-black flex gap-4">
            <label htmlFor="phone">Gender </label>
            <input type="radio" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />Female<br />
            <input type="radio" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" />Male<br />
          </div>
          <div className="text-black gap-4">
            <label htmlFor="phone">Area of Interest </label>
            <input type="text" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" /><br />
          </div>
          <div className="text-black gap-4">
            <label htmlFor="phone">Qualification </label>
            <input type="text" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500 ml-5" /><br />
          </div>
           <div className="text-black gap-4">
            <label htmlFor="phone">Past experience </label>
            <input type="text" name="phone" id="phone" className="border border-[#4b4a4a] rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500" /><br />
          </div>
          <button type="button" className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </form>
      </div>

    </div>
  )
}
