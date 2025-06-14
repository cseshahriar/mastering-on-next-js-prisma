import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="p-4 w-full">
      <h1 className="bg-green-600 text-white p-5">Hello</h1>
      <h1 className="text-vuejs-932 p-5 border-2 mt-3 border-green-400 text-sm lg:text-lg">Hello</h1>

      <h1 className="p-4 bg-[#bada55] mt-5">Text</h1>

      <section className="mt-3 border-2 p-4 w-full">
        <h2 className="text-[22px] underline">Typography</h2>
        <h1 className="leading-10 text-3xl italic">Title 1</h1>
        <h2 className="leading-loose text-2xl line-through">Title 1</h2>
        <h3 className="text-xl overline decoration-green-500 decoration-dotted">Title 1</h3>
        <p className="uppercase leading-10 text-base underline decoration-2 decoration-dashed underline-offset-8">A regular paragraph</p>
        <p className="text-sm leading-8 lowercase">A description paragraph</p>
        <p className="note text-xs leading-10 capitalize">A little note</p>

        <p className="truncate mt-3 mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="text-ellipsis mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="text-clip mb-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="whitespace-nowrap">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h1 className="p-4 bg-[#bada55] mt-5">Padding</h1>
        <p className="p-5 px-10 pb-10 bg-slate-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        <p className="m-5 mx-10 mb-10 -mt-5 bg-slate-500 border-2 border-yellow-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

        <h2 className="text-[22px] underline">Flex</h2>
        <div className="flex justify-start">
          <div className="h-16 bg-blue-300">Sidebar</div>
          <div className="h-16 bg-red-300">Main</div>
        </div>

        <div className="flex justify-center">
          <div className="h-16 bg-blue-300">Sidebar</div>
          <div className="h-16 bg-red-300">Main</div>
        </div>

        <div className="flex justify-end">
          <div className="h-16 bg-blue-300">Sidebar</div>
          <div className="h-16 bg-red-300">Main</div>
        </div>

        <div className="flex w-full items-center space-x-4 mt-3 border-2 border-slate-400">
          <div className="h-16 bg-blue-300 w-6/12">{6/12}</div>
          <div className="h-32 bg-red-300 w-6/12">{6/12}</div>
        </div>


        <div className="flex w-full space-x-4 mt-2 mb-2">
          <div className="h-16 bg-green-300 w-4/12">{4/12}</div>
          <div className="h-16 bg-red-300 w-4/12">{4/12}</div>
          <div className="h-16 bg-blue-300 w-4/12">{4/12}</div>
        </div>

         <div className="flex r w-full space-x-4">
          <div className="h-16 bg-green-300 w-4/12">{4/12}</div>
          <div className="h-16 bg-blue-300 w-4/12">{4/12}</div>
          <div className="h-16 bg-red-300 w-4/12">{4/12}</div>
        </div>

        <div className="flex w-full space-x-4 mt-3 mb-3">
          <div className="h-16 bg-green-300 w-3/12">{3/12}</div>
          <div className="h-16 bg-blue-300 w-3/12">{3/12}</div>
          <div className="h-16 bg-red-300 w-3/12">{3/12}</div>
          <div className="h-16 bg-yellow-300 w-3/12">{3/12}</div>
        </div>

        <h2 className="text-[22px] underline">Flex direction row</h2>
        <div className="flex space-x-4">
          <div className="bg-blue-300 w-4/12">{4/12}</div>
          <div className="bg-red-300 w-8/12">{8/12}</div>
        </div>
        <div className="flex space-x-4 mt-3 mb-3">
          <div className="bg-blue-300 basis-4/12">{4/12}</div>
          <div className="bg-red-300 basis-8/12">{8/12}</div>
        </div>

        <div className="flex space-x-4 mt-3 mb-3">
          <div className="bg-blue-300 w-32">32</div>
          <div className="bg-red-300 w-full">full-32</div>
        </div>

        <h2 className="text-[22px]">Flex direction col</h2>
        <div className="flex flex-col">
          <div className="bg-blue-300 w-6/12">{6/12}</div>
          <div className="bg-red-300 w-6/12">{6/12}</div>
        </div>


        <h2 className="text-[22px]">Flex equal row</h2>
        <div className="flex w-full flex-nowrap">
          <div className="bg-blue-300 w-full grow">1</div>
          <div className="bg-green-300  w-full grow">2</div>
          <div className="bg-red-300  w-full grow">3</div>
          <div className="bg-yellow-300  w-full grow">4</div>
          <div className="bg-lime-300  w-full grow">5</div>
        </div>

        <h2 className="text-[22px]">Flex equal col</h2>
        <div className="flex w-full flex-wrap">
          <div className="bg-blue-300 w-full grow">1</div>
          <div className="bg-green-300  w-full grow">2</div>
          <div className="bg-red-300  w-full grow">3</div>
          <div className="bg-yellow-300  w-full grow">4</div>
          <div className="bg-lime-300  w-full grow">5</div>
        </div>


        <h2 className="text-[22px] mt-6">Grid</h2>
          <div className="container">
            <div className="grid grid-cols-1 gap-1">
              <div className="bg-blue-300">1</div>
              <div className="bg-green-300">2</div>
              <div className="bg-red-300">3</div>
              <div className="bg-yellow-300">4</div>
              <div className="bg-lime-300">5</div>
            </div>
          </div>

           <div className="container mt-5">
            <div className="grid grid-cols-2 gap-1">
              <div className="bg-blue-300">1</div>
              <div className="bg-green-300">2</div>
              <div className="bg-red-300">3</div>
              <div className="bg-yellow-300">4</div>
              <div className="bg-lime-300">5</div>
            </div>
          </div>

           <div className="container mt-5">
            <div className="grid grid-cols-3 gap-1">
              <div className="bg-blue-300">1</div>
              <div className="bg-green-300">2</div>
              <div className="bg-red-300">3</div>
              <div className="bg-yellow-300">4</div>
              <div className="bg-lime-300">5</div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-3 gap-1">
              <div className="bg-blue-300   rounded-lg">1</div>
              <div className="bg-green-300  rounded-lg ">2</div>
              <div className="bg-red-300    rounded-lg ">3</div>
              <div className="bg-yellow-300 rounded-lg col-span-3 ">4</div>
              <div className="bg-lime-300   rounded-lg ">5</div>
              <div className="bg-lime-300   rounded-lg ">6</div>
            </div>
          </div>


          <h2 className="text-[22px] mt-6">Grid auto cols</h2>
          <div className="container mt-5">
            <div className="grid grid-flow-col auto-cols gap-1">
              <div className="bg-blue-300   rounded-lg">1</div>
              <div className="bg-green-300  rounded-lg ">2</div>
              <div className="bg-red-300    rounded-lg ">3</div>
              <div className="bg-yellow-300 rounded-lg ">4</div>
              <div className="bg-lime-300   rounded-lg ">5</div>
              <div className="bg-lime-300   rounded-lg ">6</div>
              <div className="bg-lime-300   rounded-lg ">7</div>
            </div>
          </div>


          <h2 className="text-[22px] mt-6">Grid template  row</h2>
          <div className="container mt-5">
            <div className="grid grid-rows-3 grid-flow-col gap-1">
              <div className="bg-blue-300   rounded-lg">1</div>
              <div className="bg-green-300  rounded-lg ">2</div>
              <div className="bg-red-300    rounded-lg ">3</div>
              <div className="bg-yellow-300 rounded-lg ">4</div>
              <div className="bg-lime-300   rounded-lg ">5</div>
              <div className="bg-lime-300   rounded-lg ">6</div>
              <div className="bg-lime-300   rounded-lg ">7</div>
            </div>
          </div>

          <div className="container mt-5">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div className="bg-blue-300 row-span-4">1</div>
              <div className="bg-green-300 row-span-2">2</div>
              <div className="bg-red-300 row-span-2">3</div>
                <div className="bg-blue-300 row-span-2">4</div>
              <div className="bg-green-300 row-span-2">5</div>
            </div>
          </div>
      </section>

      <h1 className="text-3xl mt-3">Layout</h1>
      <section className="container mx-auto px-2 bg-red-300">
        <div className="columns-1">Hello</div>
      </section>


      <h1 className="text-3xl mt-3">Layout columns</h1>
      <section className="container mx-auto px-2 columns-3">
       <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
       <p className="mb-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </section>

      <h1 className="text-3xl mt-3">Display</h1>
      <div className="container px-2">
        <img className="w-64 float-left" src="https://placehold.co/600x400/EEE/31343C" alt="" />
        <img className="w-64 float-right" src="https://placehold.co/600x400/EEE/31343C" alt="" />
        <p className="mb-3 clear-both">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </div>

      <h1 className="text-3xl mt-3">Position 2:25:00</h1>
      <div className="container px-2">
        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32">
          <div className="w-24 h-24 bg-green-400 absolute top-0 left-0"></div>
        </div>


        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32 mt-1">
          <div className="w-24 h-24 bg-green-400 absolute top-0 right-0"></div>
        </div>

        <div className="relative p-8 bg-red-500 rounded-lg w-32 h-32 mt-1">
          <div className="w-24 h-24 bg-green-400 absolute bottom-0 right-0"></div>
        </div>
      </div>


      <h1 className="text-3xl mt-3">z index</h1>
      <div className="flex object-center px-2">
        <div className="bg-red-100 z-40 w-16 h-16 p-3 border border-white rounded-full">05</div>
        <div className="bg-red-200 z-30 w-16 h-16 p-3 border border-white rounded-full">04</div>
        <div className="bg-red-300 z-20 w-16 h-16 p-3 border border-white rounded-full">03</div>
        <div className="bg-red-400 z-10 w-16 h-16 p-3 border border-white rounded-full">02</div>
        <div className="bg-red-500 z-0  w-16 h-16 p-3 border border-white rounded-full">0</div>
      </div>


      <h1 className="text-3xl mt-3">Form</h1>
      <div className="flex px-2">
        <button className="ring-2 shadow-lg mr-2 shadow-blue-100 p-2 rounded-lg">Save Changes</button>
        <button className="rounded-none blur-sm" >Save Changes</button>
      </div>

      <div className="mt-4">
        <div className="inline-block p-4 text-black bg-white border rounded-lg">
          <img className="skew-x-6 w-64 mb-4 hover:scale-150 hover:rotate-45" src="https://placehold.co/600x400/EEE/31343C" alt="" />
          <h1 className="text-2xl">Hello</h1>
          <p className="mb-4">This is my div</p>
          <button className="px-3 py-2 text-white rounded-lg shadow-lg cursor-pointer bg-cyan-500 shadow-cyan-500/50">Say Hello</button>
        </div>
      </div>

      <h1 className="text-3xl mt-3">Animation</h1>
      <button className="text-white p-2 rounded-sm transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:bg-indigo-500 delay-500">Save Changes</button>

      <h1 className="text-3xl mt-3">Animation</h1>
      <button className="bg-indigo-500">
        <svg className="animation-spin h-5 w-5 mr-3" viewBox="0 0 24 24"></svg>
        Processing...</button>


        <h1 className="text-3xl mt-3">Design System</h1>
        <div className="p-4 border border-2">
          <h1 >This is a title</h1>
          <h2>This is a subtitle</h2>
          <p>This is a paragraph</p>
          <a>This is a an anchor</a>

          <div>
            <input type="text" />
            <label>Text</label>
          </div>

          <div>
            <input type="email" />
            <label>Email</label>
          </div>

          <div>
            <input type="password" />
            <label>Password</label>
          </div>

          <div>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox">Checkbox</label>
          </div>

          <div>
            <select>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>

          <div>
            <button>Save Changes</button>
          </div>
        </div>


        <table className="mt-3">
          <thead>
            <tr>
              <th>Sl</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>1</td>
                <td>Name</td>
                <td>Email</td>
                <td>
                  <button className="mr-1">View</button>
                  <button className="bg-purple-500 mr-1">Edit</button>
                  <button className="bg-red-500">Delete</button>
                </td>
            </tr>
              <tr>
                <td>2</td>
                <td>Name</td>
                <td>Email</td>
                <td>
                  <button className="mr-1">View</button>
                  <button className="bg-purple-500 mr-1">Edit</button>
                  <button className="bg-red-500">Delete</button>
                </td>
            </tr>
          </tbody>
        </table>


      <a href="#open-modal" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Open Modal</a>

      <div id="open-modal" class="modal-wrapper">
          <div class="modal-overlay"></div>
          <div class="modal-content">
              <a href="#" class="close-button">&times;</a>
              <h3 class="text-lg font-semibold mb-3">Pure CSS Modal</h3>
              <p>This modal opens and closes using only CSS, leveraging the `:target` pseudo-class. Notice the URL changes!</p>
              <p class="mt-4 text-sm text-gray-600">Clicking outside or pressing ESC won't close it with CSS alone.</p>
          </div>
      </div>

    </main>
  );
}
