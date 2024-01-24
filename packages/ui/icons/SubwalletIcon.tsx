import Image from 'next/legacy/image'

export const SubWalletIcon = ({ width, height }: React.ComponentProps<'image'>) => {
  return (
    <div style={{ width, height }}>
      <Image
        src="https://raw.githubusercontent.com/Koniverse/SubWallet-Branding-Kit/main/03.App%20Icon/01.SVG/Logo%3DWhite%2C%20Background%3DGradient.svg"
        alt="SubWallet"
        className="rounded-full"
        width={Number(width)}
        height={Number(height)}
      />
    </div>
  )
}
