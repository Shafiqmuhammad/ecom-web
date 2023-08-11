import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
export const POST = async (req: NextRequest, res: NextResponse) => {

    const { cart } = await req.json();

    const cartItems = Object.values(cart)?.map((item: any, index: any) => {
        return  {
            price_data:{
                product_data:{
                    name: item.title
                },
                currency: 'USD',
                unit_amount: parseFloat(item.price.replace(/\$/g, "")) * 100,
            },
            quantity: item.quantity,
        }
        
    });
    
    console.log(cartItems);
    
    // return NextResponse.json(cartItems);
    try {
        // This is your test secret API key.
        const stripe = new Stripe('sk_test_51NNIHmCn7NK3LyDNqie2ajoOXHL93fU9zHzBGQBim78Yx2UIBb0cspQpJcuCwwfyfHiAwwGOjB8mJbUmaf8dlTdd00Y2NGc0xQ', {
            apiVersion: '2022-11-15',
            
        });
        const YOUR_DOMAIN = 'http://localhost:3000';
        const session: any = await stripe.checkout.sessions.create({
            line_items: cartItems,
            // line_items: [
                //     {
                    //         price_data:{
                        //             product_data:{
                            //                 name: 'Test Product Name 2'
                            //             },
                            //             currency: 'USD',
                            //             unit_amount: 500,
                            //         },
                            //         quantity: 1,
                            //         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                            
                            //     },
                            // ],
                            mode: 'payment',
                            success_url: `${YOUR_DOMAIN}/success`,
                            cancel_url: `${YOUR_DOMAIN}/cancel`,
                            
                            
                            //   res.redirect(303, session.url);
                        });
                        
        return NextResponse.json({redirect_url: session.url})
    } catch (error) {
        console.log(error)
        return NextResponse.json({ message: "Something went wrong" })
    }
}
