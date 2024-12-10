import { getApiDocs } from "lib/swagger";
import ReactSwagger from "../../../src/components/swagger/react-swagger"

export default async function IndexPage(){
    const spec = getApiDocs()
    return(
        <section className="container">
            <ReactSwagger spec={spec}/>
        </section>
    );
}