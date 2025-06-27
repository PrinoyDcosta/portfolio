import type { DetailedHTMLProps, ImgHTMLAttributes } from 'react'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

export default function ZoomableImage({
  src,
  alt,
  className,
}: DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>) {
  if (!src) return null
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt || ''}
          sizes="100vw"
          className={className}
          width={500}
          height={500}
        />
      </DialogTrigger>
      <DialogContent className="max-w-7xl border-0 bg-transparent p-0">
        <div className="relative h-[calc(100vh-220px)] w-full overflow-clip rounded-md bg-transparent shadow-md">
            <img
                src={src}
                alt={alt || ''}
                sizes="100vw"
            />
        </div>
      </DialogContent>
    </Dialog>
  )
}
