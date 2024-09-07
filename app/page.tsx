import Clipboard from './ui/clipboard'
import Container from './ui/container'
import { SlGraph } from 'react-icons/sl'


export default function Page() {
  return (
    <Container>
      <div className="h-[100px] flex items-center mb-16 lg:mb-28">
        <SlGraph className="text-white text-[76px] lg:text-[45px]" />
      </div>
      <h1 className="text-[72px] mb-16 lg:mb-6 text-center lg:text-left font-light text-bright">
        Short links
      </h1>
      <form
        className="text-center mb-16 flex flex-col lg:flex-row lg:justify-end items-center gap-8 lg:gap-9"
        action=""
      >
        <input
          className="w-80 border placeholder:text-faint text-standard border-faint focus:border-standard rounded-xl px-6 py-5 bg-black outline-none"
          type="text"
          placeholder="Your link"
        />
        <button className="w-[100px] h-[72px] text-2xl uppercase rounded-xl flex justify-center text-standard bg-btnBg hover:bg-[#2e2e2e] border border-faint items-center transition">
          ok
        </button>
      </form>
      <div className="flex flex-col lg:flex-row items-center gap-9 lg:gap-6">
        <div className='text-bright text-center text-2xl font-medium'>https://short-links.vercel.app/l/vfewu329</div>
        <Clipboard content="https://short-links.vercel.app/l/vfewu329" />
      </div>
    </Container>
  )
}
