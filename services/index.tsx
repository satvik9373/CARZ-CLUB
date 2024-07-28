import request,{gql} from "graphql-request"

export const getCarsList=async()=>{
const query=gql`
query carLists {
  carLists {
    caravg
    createdAt
    id
    name
    price
    publishedAt
    updatedAt
    image {
      url
    }
      carType
  }
}
`

const result=await request('https://ap-south-1.cdn.hygraph.com/content/clz2r2khx00l407uw3hayzydv/master',query); 
return result;
}