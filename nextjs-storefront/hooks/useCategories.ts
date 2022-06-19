import {
    useQuery,
} from "react-query";
import { request, gql } from "graphql-request";
import { endpointGraphql } from "pages/_app";

export default function useCategories() {
    return useQuery("posts", async () => {
        const {
            posts: { data },
        } = await request(
            endpointGraphql,
            gql`
                query {
                    categories(first: 10) {
                    edges {
                        node {
                        id
                        name
                        }
                    }
                    }
                }
        `
        );
        return data;
    });
}