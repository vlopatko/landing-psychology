import { FC } from 'react'

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <div className="aboslute bottom-0 left-0 right-0 flex h-fit w-full flex-col items-center bg-[#898A60]">
      {literature.map((book) => (
        <div key={book.name} className="w-fit text-white">
          <div>{book.name}</div>
        </div>
      ))}
    </div>
  )
}

export default Footer
