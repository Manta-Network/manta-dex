import { Layout } from 'components'
import Image from 'next/image'
import { Button } from '@zenlink-interface/ui'
import IconA from '../public/home-icon-a.svg'
import IconB from '../public/home-icon-b.svg'
import IconC from '../public/home-icon-c.svg'
import IconArrow from '../public/home-icon-arrow.svg'

export default function Index() {
  return (
    <>
      <div className="banner">
        <div className="lg:mx-auto px-4 h-full max-w-5xl w-full">
          <div className="pt-16 pb-4 text-white lg:text-4xl text-2xl">
            The Decentralized Exchange
            <br /> for Manta ZK Ecosystem
          </div>
          <div className="text-white lg:max-w-[505px]">
            MantaDEX is a groundbreaking exchange on the Manta Network. Dive
            into a realm of innovation driven by modular ZK systems, shaping the
            future of web3 ecosystems and decentralized applications. Join us in
            redefining secure and interoperable trading experiences, guided by
            the strength of Zero-Knowledge technology.
          </div>
          <a href="/swap">
            <div className="mt-4 w-[120px] text-white flex justify-between">
              <span>Swap</span>{' '}
              <Image className="inline" src={IconArrow} alt="swap" />
            </div>
          </a>
          <a href="/pool">
            <div className="mt-4 w-[120px] text-white flex justify-between">
              <span>Pool</span>{' '}
              <Image className="inline" src={IconArrow} alt="pool" />
            </div>
          </a>
        </div>
      </div>
      <Layout>
        <div className="title mb-8 lg:text-4xl text-2xl text-center">
          Start your trip now in MantaDEX
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1 h-[320px]">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-[24px] h-full flex flex-col justify-between">
              <div className="pb-4">
                <div className="pb-2">
                  <Image priority width={100} src={IconA} alt="Trade Now" />
                </div>
                Swap tokens instantly in Manta Network with low fees and minimal
                slippage.Stay tuned for new trading pairs!
              </div>
              <a href="/swap">
                <Button fullWidth size="sm">
                  Trade Now
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 h-[320px]">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-[24px] h-full flex flex-col justify-between">
              <div className="pb-4">
                <div className="pb-2">
                  <Image priority width={100} src={IconB} alt="Trade Now" />
                </div>
                Supply a token pair to receive liquidity provider (LP) tokens.
                Stake LP tokens to mine MANDEX! Be sure to catch up with the
                First Mine Period!
              </div>
              <a href="/pool">
                <Button fullWidth size="sm">
                  Provide liquidity to farm
                </Button>
              </a>
            </div>
          </div>
          <div className="flex-1 h-[320px]">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-[24px] h-full flex flex-col justify-between">
              <div className="pb-4">
                <div className="pb-2">
                  <Image priority width={100} src={IconC} alt="Trade Now" />
                </div>
                You can stake MANDEX tokens to earn fees and MANDEX token rewards.
              </div>
              <a href="/pool">
                <Button fullWidth disabled size="sm">
                  Stake Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
