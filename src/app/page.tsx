import Button from "@/components/Buttons"
import { COLOR_DATAS } from "@/constants/ColorsDatas"
import { SIZE_DATAS } from "@/constants/SizeDatas"

export default function Home({
  searchParams
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const selectedColor = searchParams.color
  const selectedSize = searchParams.size
  console.log(selectedColor)
  // console.log('searchParams', searchParams)
  return (
    <main>
      <h1>Acme circles T-Shirt</h1>
      <div>
        <p>Color</p>
        <div className="flex space-x-4">
            {
                COLOR_DATAS?.map((data, key) => (
                  <Button href={`/?color=${data.name}&size=${selectedSize}`} active={data.name === selectedColor }  name={data.name} key={key}/>
                ))
            }
        </div>
        <div className="flex space-x-4">
            {
                SIZE_DATAS?.map((data, key) => (
                  <Button href={`/?color=${selectedColor}&size=${data.name}`} active={data.name === selectedSize }  name={data.name} key={key}/>
                ))
            }
        </div>
     
      </div>
    </main>
  )
}
