import { render } from "@testing-library/react";
import ContainerFlex from "../ContainerFlex";

describe("@components/ContainerFlex", () => {
    it("Verificar que renderice", () => {
        //arrange
        const { getByRole } = render(
            <ContainerFlex justifyContent="center" role="banner" />
        );
        //act
        const containerFlexTest = getByRole("banner");
        //assert
        expect(containerFlexTest).toBeDefined();
        // expect(containerFlexTest).toHaveAttribute("justifyContent", "center");
    });
});
