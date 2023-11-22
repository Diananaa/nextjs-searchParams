import Button from "@/components/Buttons"
import { COLOR_DATAS } from "@/constants/ColorsDatas"
import { SIZE_DATAS } from "@/constants/SizeDatas"
import Image from "next/image"
import { imgBread, imgCheese, imgLeek, imgMustard, imgSauce, imgSosis } from "../../public"

export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const selectedColor = searchParams.color
  const selectedSize = searchParams.size
  const haveSauce = searchParams.sauce
  const haveCheese = searchParams.cheese
  const haveSausage = searchParams.sausage
  // const 

  const isSauce = haveSauce === 'true'
  const isCheesen = haveCheese === 'true'
  const isSausage = haveSausage === 'true'

  console.log('haveSauce',haveSauce)
  console.log('isSauce', isSauce)
  return (
    <main>
      <h1>Acme circles T-Shirt</h1>
      <div className="relative bg-black w-[400px] h-[400px]">
        <Image src={imgBread} className="absolute bottom-0 left-0" alt="image pizza bread" />
        <Image src={imgSauce} className={`absolute bottom-6 left-6 ${isSauce || 'hidden'}`} alt="image pizza sauce tomato" />
        <Image src={imgCheese} className={`absolute bottom-[60px] left-[60px] ${isCheesen || 'hidden'}`} alt="image pizza cheese" />
        <Image src={imgSosis} className={`absolute bottom-8 left-8 ${isSausage || 'hidden'}`} alt="image pizza sosis" />
        <Image src={imgMustard} className="absolute bottom-[110px] left-[110px]" alt="image pizza sauce mustard" />
        <Image src={imgLeek} className="absolute bottom-[90px] left-[90px]" alt="image pizza leek" />
      </div>
      <div>
        <p>Color</p>
        <div className="flex space-x-4">
          {
            COLOR_DATAS?.map((data, key) => (
              <Button href={`/?color=${data.name}${selectedSize ? `&size=${selectedSize}` : ''} `} active={data.name === selectedColor} name={data.name} key={key} />
            ))
          }
        </div>
        <div className="flex space-x-4">
          {
            SIZE_DATAS?.map((data, key) => (
              <Button href={`/?${selectedColor ? `color=${selectedColor}&` : ''}size=${data.name}`} active={data.name === selectedSize} name={data.name} key={key} />
            ))
          }
        </div>

      </div>
    </main>
  )
}
