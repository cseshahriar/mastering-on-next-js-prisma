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

      </section>

    </main>
  );
}
