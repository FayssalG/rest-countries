import { StyledLink } from "../styled-components/components"

export default function NotFound(){
    return(
        <div className="text-center">
            <h1 className="my-5">Not Found 404</h1>
            <StyledLink className="border text-decoration-none py-2 px-4 rounded" to='/'>Back</StyledLink>
        </div>
    )
}