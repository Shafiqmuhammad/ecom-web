import React from 'react'
import Image from 'next/image'
import event1 from '/public/assets/event1.png'
import event2 from '/public/assets/event2.png'
import event3 from '/public/assets/event3.png'

const Promotions = () => {
    return (
        <section className='event-container'>
            <div className='subtitle text-center'>
                <span className='text-white font-bold tracking-widest	'>PROMOTIONS</span>
                <h2 className='text-5xl font-bold tracking-wider text-green-900 '>Our Promotions Events</h2>
            </div>




            <div className='flex justify-evenly mt-6'>
                <div className='  flex flex-col gap-5'>
                    <div className='flex flex-row shadow-md bg-green-400 '>
                        <div>
                            <h1 className=' text-2xl font-bold'>Get Up To </h1>
                            <span className='text-4xl'> 60%</span>
                            <p className='text-2xl'>For the summer season</p>

                        </div>
                        <Image src={event1} height={180} width={200} alt={'event1'} />
                    </div>


                    <div className='shadow-md pt- h-full bg-green-800 text-center py-4'>
                        <div className='flex flex-col gap-2' >
                            <h1 className=' text-2xl font-bold'>GET 30% Off </h1>
                            <span className='text-2xl'> USE PROMO CODE</span>
                            <div>
                            <button className='text-green-900 ml-10 rounded bg-green-400 py-3 text-center px-24'>DINEWEEKENDSALE</button>

                            </div>
                        </div>
                    </div>

                </div>

                <div className='shadow-md bg-green-400'>
                    <div >
                        <h1 className=' text-2xl font-bold'>Flex Sweatshirt </h1>

                        <span className='line-through text-lg'>$100.00</span>
                        <span className='font-bold ml-3 text-lg '>$75.00</span>

                    </div>
                    <div>
                        <Image src={event2} height={180} width={200} alt={'event1'} />

                    </div>
                </div>


                <div className='shadow-md bg-green-400'>
                    <div >
                        <h1 className=' text-2xl font-bold'>Flex Push Button </h1>
                        <span className='line-through text-lg'>$225.00</span>
                        <span className='font-bold ml-3 text-lg '>$190.00</span>
                    </div>
                    <div>
                        <Image src={event3} height={180} width={200} alt={'event1'} />

                    </div>
                </div>

            </div>


        </section>
    )
}

export default Promotions