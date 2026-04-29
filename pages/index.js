import axios from 'axios'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NextSeo } from 'next-seo'

import styles from '@/styles/Home.module.css'
import BASE_URL from '@/config'

import Header3 from '@/components/Header/Header3'
import Features from '@/components/Offer/Features'
import Grid from '@/components/Categories/Explore/Grid'
import Architecture from '@/components/Offer/Architecture'
import Why from '@/components/Offer/Why'
import ShopNow from '@/components/Offer/ShopNow'

export default function Home({ contents, departments, symptoms }) {
  const location = useSelector(state => state.user.location)
  const [doctors, setDoctors] = useState([])
  const [incoming, setIncoming] = useState(false)

  const fetchUsers = async () => {
    try {
      setIncoming(true)
      let params = location?.lat ? {
        lat: location.lat, lng: location.lng, radius: 10
      } : { radius: 10 }
      const { data } = await axios.get(
        "/api/user/filter",
        { params }
      )
      setDoctors(data.users)
      setIncoming(false)

    } catch (error) {
      console.log(error)

    }
  }

  useEffect(() => {
    fetchUsers()
  }, [location?.lat])

  return (
    <>
      <NextSeo
        title="Tasnim Tutors – Find & Book Expert Tutors সহজে"
        description="Connect with qualified tutors and schedule home or online classes at your convenience. Chat with tutors, choose your subject, and start learning easily with Tasnim Tutors."
        openGraph={{
          title: "Tasnim Tutors – Learn with Trusted Tutors",
          description:
            "Skip the hassle of searching. Connect with experienced tutors and book personalized home or online classes at your preferred time. সহজে টিউটর খুঁজুন with Tasnim Tutors.",
          url: BASE_URL,
          site_name: "Tasnim Tutors",
          images: [
            {
              url:
                contents?.find(i => i.position === "header")?.image ||
                `${BASE_URL}/images/tasnim-tutors.png`,
              width: 1200,
              height: 630,
              alt: "Tasnim Tutors – Tutor Booking Platform",
            },
          ],
          type: "website",
        }}
        twitter={{
          handle: "@tasnimtutors",
          site: "@tasnimtutors",
          cardType: "summary_large_image",
        }}
      />




      <div className={styles.wrapper}>

        <Header3 contents={contents.filter(i => i.position == "header")} />
        <div className={styles.features}>
          <Features />
        </div>

        <div className={styles.categoriesInRow} style={{ textAlign: "center" }}>
          <div className={styles.top}>
            <h2>Tutors From <span className={styles.icon}>Top Universities</span></h2>
            <p>Out tutors from Bangladesh's most reputed instituions including BUET , DU , DMC , IBA , NSU , BRAC and more</p>
          </div>
          <Grid items={departments} />
        </div>
        <div className={styles.categoriesInRow} style={{ textAlign: "center" }}>
          <div className={styles.top}>
            <h2>How does it work for <span className={styles.icon}>guardians/students</span> ?</h2>
            {/* <p>Out tutors from Bangladesh's most reputed instituions including BUET , DU , DMC , IBA , NSU , BRAC and more</p> */}
          </div>
          <Architecture />
        </div>
        <div className={styles.off}>
          <Why />
        </div>

        {/* <ProductsByCategory2
          products={doctors}
          structure={'grid'}
          title={"Tutors From Top University"}
          description={"Our Tutor Come from Bangladesh most reputed instituions including BUET , DU , DMC , IBA , NSU , BRAC and more"}
          incoming={incoming}
          seeMore={true}
        /> */}

        {/* <ProductsByCategory2
          products={users}
          structure={'grid'}
          title={"Available Doctors Now"}
          description={"Consult verified doctors online anytime, anywhere!"}
        /> */}



        <div className={styles.off}>
          <ShopNow content={contents.filter(i => i.position == "cta")[0]} />
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  try {
    const start = new Date()
    const { data: contents } = await axios.get(
      `${BASE_URL}/api/content?show=true`
    )

    const { data: departments } = await axios.get(
      `${BASE_URL}/api/department/view`
    )

    const { data: symptoms } = await axios.get(
      `${BASE_URL}/api/symptom/view`
    )


    const end = new Date()
    console.log(`time : ${end - start}ms`)
    return {
      props: {
        contents: contents.contents,
        symptoms,
        departments
      },
      revalidate: 60 // Revalidate at most every 10 seconds
    }
  } catch (error) {
    console.error('Error fetching products:', error)
    return {
      props: {
        contents: [],
        symptoms: [],
        departments: []
      },
      revalidate: 100 // Revalidate at most every 10 seconds
    }
  }
}
