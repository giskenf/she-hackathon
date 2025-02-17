import { getAllFairytales } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  fairytales: iFairytale[]
}

const StoriesPage = ({ fairytales }: PageProps) => {
  return (
    <>
      <main className="min-h-screen p-4">
        <section className="">
          <h1 className="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text py-10  text-center xl:text-8xl lg:text-8xl sm:text-7xl md:text-7xl font-extrabold text-transparent">
            Eventyr
          </h1>
          {/* Example how to Link to slug page:
          <Link href={`/fairytale/${fairytale.slug}`}></Link>
          */}

          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 mx-12"></ul>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const [fairytales = []] = await Promise.all([getAllFairytales()])

  return {
    props: {
      fairytales: fairytales,
    },
  }
}

export default StoriesPage
