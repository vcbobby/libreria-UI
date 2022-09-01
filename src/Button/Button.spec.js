import { render } from "@testing-library/react";

import Button from "./Button";

describe("@components/Button", () => {
    it("Given a normal component call it should render component", () => {
        //arrange
        const { getByRole } = render(<Button bgColor="red" type="button" />);
        //act
        const buttonTest = getByRole("button");
        //assert
        expect(buttonTest).toBeDefined();
        // expect(buttonTest).toHaveProperty("bgColor", "red");
    });

    // it("renderizar color", () => {
    //     //arrange
    //     const { getByRole } = render(<Button bgColor="red" type="button" />);
    //     //act
    //     const buttonTest = getByDisplayValue("bgColor", { name: "red" });

    //     //assert
    //     expect(buttonTest).toBeDefined();
    //     // expect(buttonTest).toHaveProperty("bgColor", "red");
    // });
});
