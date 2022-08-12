import React from "react"
import { create } from "react-test-renderer"
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props", () => {
        const component = create(<ProfileStatus status='vlad-poshenko'/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("vlad-poshenko")
    })
})
