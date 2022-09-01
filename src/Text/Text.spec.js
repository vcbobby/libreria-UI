import { render } from "@testing-library/react";
import Text from "./Text";

describe("@components/Text", () => {
    it("should render", () => {
        const { getByRole } = render(<Text component="h1">Platzii</Text>);
        const TextTest = getByRole("heading", { name: "Platzii" });
        expect(TextTest).toBeDefined();
    });
});
