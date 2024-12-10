'use client'

import SwaggerUI from "swagger-ui-react"
import 'swagger-ui-react'

type Props = {
    spec: Record<string, any>
}

function ReactSwagger({spec}: Props){
    return <SwaggerUI spec={spec}/>
}

export default ReactSwagger