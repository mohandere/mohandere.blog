---
title: Jest/React testing snippets
date: 2020/03/03
tag: testing
description: Collection of Jest/React testing snippets
---

# Jest/React testing snippets

## Mock a library/package

```jsx
jest.mock("@myorg/core", () => {
  const originalModule = jest.requireActual("@myorg/core");
  return {
    __esModule: true,
    ...originalModule,
    useRemoteConfig: () => ({
      getRemoteValue: jest.fn(() => "https://myuserservice/v2"),
    }),
    useFeatureToggle: jest.fn().mockImplementation(() => false),
  };
});
```

### Mock default export from library

```jsx
jest.mock("@react-native-firebase/analytics", () => ({
  __esModule: true,
  default: () => ({
    logEvent: jest.fn(),
  }),
}));
```

### Mock React component from library

```jsx
jest.mock("@myorg/ui-components", () => {
  const originalModule = jest.requireActual("@myorg/ui-components");
  return {
    __esModule: true,
    ...originalModule,
    Stepper: (props) => <MockStepper {...props} />,
  };
});

const MockedStepper = ({ activeStep, totalSteps, onStepIconPress }) => {
  const onButtonClick = () => {};
  return (
    <div testID="stepper">
      <h1>{`active-step-${activeStep}`}</h1>
      <button
        title="StepperIcon"
        testID="StepperIcon"
        onClick={onButtonClick}
      />
    </div>
  );
};
```

## Re-render component in RTL

```jsx
import { render } from "@testing-library/react";
const { rerender } = render(<NumberDisplay number={1} />);
// re-render the same component with different props
rerender(<NumberDisplay number={2} />);
```

## Wait for next render with RTL

```jsx
import React from "react";
import { render, screen, wait } from "@testing-library/react"; // highlight-line
import Index from "./Index";
import "jest-dom/extend-expect";
import { fetchPosts } from "./api/posts";

jest.mock("./api/posts");

test("We show a list of posts", async () => {
  const posts = [{ id: 1, title: "My post", url: "/1" }];

  fetchPosts.mockResolvedValueOnce(posts);

  render(<Index />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  expect(fetchPosts).toHaveBeenCalledTimes(1);
  expect(fetchPosts).toHaveBeenCalledWith();

  // highlight-start
  expect(await screen.findByText('My Posts')).toBeInTheDocument());
  // OR
  await waitFor(() => expect(screen.getByText("My Posts")).toBeInTheDocument());
  // highlight-end

  posts.forEach((post) =>
    expect(screen.getByText(post.title)).toBeInTheDocument()
  );
});
```

## Wait for next render

```jsx
const waitForNextTick = () => {
  jest.useRealTimers();
  return new Promise((resolve) => setTimeout(resolve));
};

test("should be able to go next page on submit", async () => {
  const { queryByTestId, queryByText, findByTestId } = component;
  // On page 1
  expect(queryByTestId("Name und Geburtstag")).toBeTruthy();
  changeFirstName("John");
  changeLastName("De");
  changeDob("12.01.1991");
  const submitButton = await findByTestId("submit");
  jest.useFakeTimers();
  fireEvent.click(submitButton);
  jest.runAllTimers();
  await waitForNextTick();
  // On page 2
  expect(queryByTestId("Kontakt und AGB’s")).toBeTruthy();
});
```

## spyOn

```jsx
// Example 1

...

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.123456789);
  component = render(<LoginScreen {...props} />);
});

// Example 2

import * as UserService from '../service/UserService';

...

jest.spyOn(UserService, 'verifyOTP').mockImplementation(() => Promise.reject({
  errorCode: 'E1001',
  errorMessage: 'Something went wrong. Please try again',
}));
```

Thanks!
