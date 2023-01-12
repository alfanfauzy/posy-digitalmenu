import Image from 'next/image'
import { useRouter } from 'next/router'
import { Button, Checkbox, IconButton, Label, TimeLabel } from 'posy-fnb-ds'
import React, { useState } from 'react'
import { BiMinus, BiPlus, BiTimeFive } from 'react-icons/bi'

const Page = () => {
  const router = useRouter()
  const [count, setCount] = useState(0)

  const [checked, setChecked] = useState(false)


  return (
    <main className="p-4 shadow-md">
      <section>
        <div
          onClick={() => router.push(`${router.asPath}/23`)}
          role="presentation"
          className="h-72 relative transition duration-300 ease-in-out"
        >
          <Image
            src="/menu.png"
            alt="menu"
            fill
            sizes="100vw"
            loading="lazy"
            className="object-cover rounded-lg shadow-sm"
          />

          <div className="absolute top-3">
            <Label size="l" title="Promo" />
          </div>
          <div className="absolute bottom-3">
            <TimeLabel startAdornment={<BiTimeFive />} size="l" title="in 15 min" />
          </div>
        </div>
      </section>

      <section className="mt-4 divide-y">
        <div className="pb-4">
          <p className="text-xxl-bold">Fried Cap Cay</p>
          <div className="flex items-center gap-2">
            <p className="text-xxl-regular">30.000</p>
            <p className="text-xxl-regular line-through text-neutral-70">50.000</p>
          </div>
          <p className="text-m-regular mt-0.5">
            Served mixed with meats such as chicken, liver, beef, shrimp, and slices of fish
            meatballs.
          </p>
        </div>
        <div />
      </section>

      <div className="mt-4">
        <p className="text-xl-semibold">Add on</p>
      </div>

      <section className="divide-y">
        <aside className="divide-y text-neutral-100 pb-4">
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="0"
            title="Spicy lv 0"
          />
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="2.000"
            title="Spicy lv 1"
          />
          <Checkbox
            checked={checked}
            onChange={() => setChecked(!checked)}
            label="4.000"
            title="Spicy lv 2"
          />
        </aside>
        <div />
      </section>

      <section className="mt-4 mb-44">
        <p className="text-l-regular mb-1">Notes</p>
        <textarea
          placeholder="Example: no onion, please"
          className="w-full border border-neutral-50 shadow-sm rounded-md px-3 py-1.5 h-24 focus:outline-neutral-60"
        />
        <p className="text-m-regular">0 / 200</p>
      </section>

      <section
        style={{
          boxShadow: '0px -6px 24px rgb(0 0 0 / 10%)',
        }}
        className="-ml-4 rounded-t-2xl bg-neutral-10 fixed bottom-0 w-full max-w-[576px] px-4 pb-6 pt-8"
      >
        <div className="flex items-center">
          <p className="text-xl-semibold flex-1 gap-4">Item Quantity</p>
          <div className="flex gap-3">
            <IconButton disabled={count === 0} onClick={() => count > 0 && setCount(count - 1)}>
              <BiMinus />
            </IconButton>
            <div>{count}</div>
            <IconButton onClick={() => setCount(count + 1)}>
              <BiPlus />
            </IconButton>
          </div>
        </div>
        <div className="mt-6">
          <Button fullWidth>
            <div className="flex items-center justify-between">
              <p className="text-l-semibold">Basket</p>
              <p className="text-xxl-semibold flex flex-1 justify-end">Rp16.000</p>
            </div>
          </Button>
        </div>
      </section>
    </main>
  )
}

export default Page
