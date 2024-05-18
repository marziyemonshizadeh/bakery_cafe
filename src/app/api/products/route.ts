import productModel from "@/models/product";
import connectToDB from "@/utils/db";

export async function GET() {
        const products = await productModel.find({}, "-__v").populate("comments");
        return Response.json(products);  
  }

export async function POST(request: Request) {
    try{
    connectToDB();
    const body = await request.json()
        const { 
            name,
            price,
            shortDescription,
            longDescription,
            image,
            weight,
            suitableFor,
            smell,
            score,
            Inventory,
            tags
         } = body;
         const product = await productModel.create({
            name,
            price,
            shortDescription,
            longDescription,
            image,
            weight,
            suitableFor,
            smell,
            score,
            Inventory,
            tags
          });
      
          return Response.json(
            { message: "Product created successfully :))", data: product },
            { status: 201 }
          );
    }catch(err){
        return Response.json({ message: err }, { status: 500 });
    }
}