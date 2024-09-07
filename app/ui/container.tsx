export default function Container({ children }: { children: any }) {
  return (
    <div className='min-h-screen container mx-auto px-3 bg-black text-standard'>
      {children}
    </div>
  )
}