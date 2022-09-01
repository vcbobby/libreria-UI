import { render } from "@testing-library/react";
import MediaImg from "./MediaImg";

describe("@components/MediaImg", () => {
    it("should render correctly", () => {
        //arrange
        const { getByRole } = render(
            <MediaImg alt="Platzi" src="http://www.platzi.com/img" />
        );
        //act
        const MediaImgTest = getByRole("img");
        //assert
        expect(MediaImgTest).toBeInTheDocument();
        expect(MediaImgTest).toHaveAttribute("alt", "Platzi");
    });
});
