import React, { useEffect, useState } from 'react'
import styles from '../styles/Login.module.css'
import Logo from '@/components/Utility/Logo'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { login } from '@/redux/userSlice'
import { showSnackBar } from '@/redux/notistackSlice'
import { NextSeo } from 'next-seo'
import { loginSeoData } from '@/utility/const'
import { finishLoading, startLoading } from '@/redux/stateSlice'


const STORAGE_KEY = 'tutor_form_draft'

const initialState = {
    guardianName: '',
    studentClass: '',
    medium: '',
    subjects: '',
    tutorPreference: '',
    tutorBackground: '',
    address: '',
    tuitionType: '',
    schedule: '',
    budget: '',
    phone: '',
    notes: '',
    email: '',
    password: ''
}


const Login = () => {
    const [user, setUser] = useState({})
    const router = useRouter()
    const dispatch = useDispatch()
    const [loaded, setLoaded] = useState(false)

  // ✅ Load draft (client only)
    useEffect(() => {
        if (typeof window === 'undefined') return

        try {
            const saved = localStorage.getItem(STORAGE_KEY)
            if (saved) {
                setUser(JSON.parse(saved))
            }
        } catch (err) {
            console.log('Failed to load draft', err)
        }

        setLoaded(true)
    }, [])

    // ✅ Auto-save (only after load to prevent overwrite)
    useEffect(() => {
        if (!loaded) return
        if (typeof window === 'undefined') return

        localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
    }, [user, loaded])

   const send = async () => {
    try {
        dispatch(startLoading())

        const { data } = await axios.post('/api/hire', {
            ...user
        })

        if (!data.error && data.success) {

            dispatch(
                showSnackBar({
                    message: 'Request Submitted Successfully'
                })
            )

            // ✅ clear draft after success
            localStorage.removeItem(STORAGE_KEY)

            // optional: reset form
            setUser(initialState)

            // optional redirect (you can remove if not needed)
            router.push('/success')
        } else {
            dispatch(
                showSnackBar({
                    message: data.message || 'Failed to submit request',
                    option: { variant: 'error' }
                })
            )
        }

        dispatch(finishLoading())
    } catch (error) {
        dispatch(finishLoading())

        dispatch(
            showSnackBar({
                message: 'Something Went Wrong !',
                option: { variant: 'error' }
            })
        )

        console.log(error)
    }
}

    return (
        <>
            <NextSeo {...loginSeoData} />
            <div className={styles.wrapper}>
                <div className={styles.form__container}>
                    <div className={styles.logo}>
                        <Logo />
                    </div>

                    <h2>Request a Tutor</h2>
                    <p>
                        আপনার সন্তানের জন্য উপযুক্ত টিউটর পেতে নিচের ফর্মটি পূরণ করুন 📝
                    </p>

                    <form>
                        <label>আপনার নাম (অভিভাবক / শিক্ষার্থী)</label>
                        <input
                            value={user.guardianName || ''}
                            placeholder="আপনার নাম লিখুন"
                            onChange={e =>
                                setUser({ ...user, guardianName: e.target.value })
                            }
                        />

                        <label>শিক্ষার্থী কোন শ্রেণিতে পড়ছে?</label>
                        <input
                            value={user.studentClass || ''}
                            placeholder="যেমন: Class 8 / SSC / HSC"
                            onChange={e =>
                                setUser({ ...user, studentClass: e.target.value })
                            }
                        />

                        <label>মাধ্যম কী?</label>
                        <input
                            value={user.medium || ''}
                            placeholder="বাংলা / ইংরেজি / ইংলিশ ভার্সন"
                            onChange={e => setUser({ ...user, medium: e.target.value })}
                        />

                        <label>কোন কোন বিষয়ে টিউটর প্রয়োজন?</label>
                        <input
                            value={user.subjects || ''}
                            placeholder="Math, Physics, English"
                            onChange={e => setUser({ ...user, subjects: e.target.value })}
                        />

                        <label>টিউটর পছন্দ?</label>
                        <input
                            value={user.tutorPreference || ''}
                            placeholder="ছেলে / মেয়ে / যেকোনো"
                            onChange={e =>
                                setUser({ ...user, tutorPreference: e.target.value })
                            }
                        />

                        <label>টিউটরের ব্যাকগ্রাউন্ড</label>
                        <input
                            value={user.tutorBackground || ''}
                            placeholder="BUET / DU / Medical"
                            onChange={e =>
                                setUser({ ...user, tutorBackground: e.target.value })
                            }
                        />

                        <label>বাসার ঠিকানা</label>
                        <input
                            value={user.address || ''}
                            placeholder="Dhanmondi, Dhaka"
                            onChange={e => setUser({ ...user, address: e.target.value })}
                        />

                        <label>টিউশন টাইপ</label>
                        <input
                            value={user.tuitionType || ''}
                            placeholder="হোম / অনলাইন"
                            onChange={e =>
                                setUser({ ...user, tuitionType: e.target.value })
                            }
                        />

                        <label>সপ্তাহে কয়দিন</label>
                        <input
                            value={user.schedule || ''}
                            placeholder="৩ দিন, সন্ধ্যা ৭টা"
                            onChange={e => setUser({ ...user, schedule: e.target.value })}
                        />

                        <label>বাজেট</label>
                        <input
                            value={user.budget || ''}
                            placeholder="5000 টাকা"
                            onChange={e => setUser({ ...user, budget: e.target.value })}
                        />

                        <label>মোবাইল নাম্বার</label>
                        <input
                            value={user.phone || ''}
                            placeholder="মোবাইল নাম্বার"
                            onChange={e => setUser({ ...user, phone: e.target.value })}
                        />

                        <label>বিশেষ চাহিদা</label>
                        <input
                            value={user.notes || ''}
                            placeholder="বিশেষ নির্দেশনা"
                            onChange={e => setUser({ ...user, notes: e.target.value })}
                        />

                        <div className={styles.btn} onClick={send}>
                            Submit
                        </div>
                    </form>

                    <p className={styles.route}>
                        Don&apos;t have an account? <Link href="/register">Create new one</Link>
                    </p>

                    <p className={styles.route}>
                        Forget Password? <Link href="/verify/existance">Reset password</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login