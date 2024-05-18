import commentModel from "@/models/comment";
import productModel from "@/models/product";
import connectToDB from "@/utils/db";

 export async function GET() {
        const products = await commentModel.find({}, "-__v");
        return Response.json(products);
 }
 export async function POST(request: Request) {
    try{
        connectToDB();
        const body = await request.json()
            const { 
                userName,  
                email,  
                message,  
                score,  
                date,  
                productID
             } = body;
             const comment = await commentModel.create({
                userName,  
                email,  
                message,  
                score,  
                date,  
                productID
              });
            const updatedProduct = await productModel.findOneAndUpdate(
                {_id: productID},
                { 
                    $push: {
                    comments: comment._id,
                    },
                })
              return Response.json(
                { message: "comment created successfully :))", data: comment },
                { status: 201 }
              );
        }catch(err){
            return Response.json({ message: err }, { status: 500 });
        }
 }