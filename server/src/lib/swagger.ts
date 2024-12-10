import { createSwaggerSpec } from "next-swagger-doc"

export const getApiDocs= async () => {
    const spec = createSwaggerSpec({
        apiFolder: "pages/api/api-docs",
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Next API Swagger",
                version: "1.0"
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT"
                    }
                }
            },
            security: []
        },

    })

    return spec
}