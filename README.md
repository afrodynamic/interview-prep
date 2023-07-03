# Interview Prep

## Table of Contents

* [Interview Prep](#interview-prep)
  * [Table of Contents](#table-of-contents)
  * [Description](#description)
  * [Usage](#usage)
    * [Requirements](#requirements)
    * [Setup and Running](#setup-and-running)
      * [Typescript Solutions](#typescript-solutions)
      * [C++ Solutions](#c-solutions)

## Description

This repository contains my solutions to a variety of coding problems from different sources.

## Usage

The `core` folder is a collection of common data structures and algorithms that I have implemented.

The `problems` folder contains my solutions to various coding problems, sorted by source and language of implementation.

### Requirements

You will need the following dependencies to run this project:

* `git`: Required for cloning the project ([download](https://git-scm.com/downloads))
* `node` / `npm`: Required to manage Typescript solutions' project dependencies ([download](https://nodejs.org/en/download))
* A C++ compiler: Required to build and run the C++ solutions, some options include:
  * `GCC` ([download](https://gcc.gnu.org/releases.html))
  * `Clang` ([download](https://releases.llvm.org/download.html))
* `cmake`: Required as the build system generator for this project, necessary to build the C++ solutions ([download](https://cmake.org/download))

### Setup and Running

To run this project, please follow these steps:

1. Clone the repository to your local machine

   ```shell
   git clone https://github.com/afrodynamic/interview-prep.git
   ```

2. Navigate to the cloned repository directory

   ```shell
   cd interview-prep
   ```

Then follow the instructions for the language you want to run below:

#### Typescript Solutions

1. Install the project's dependencies using `npm install` in the root of the project directory

   ```shell
   npm install
   ```

2. You can run the tests for TypeScript solutions by running `npm test` in the root directory

   ```shell
   npm test
   ```

#### C++ Solutions

1. Create a `build` directory at the root of the project directory and navigate into it

   ```shell
   mkdir build && cd build
   ```

2. Run `cmake` to generate the build files

   ```shell
   cmake ..
   ```

3. Build the project using the generated build files

   ```shell
   cmake --build .
   ```

4. To run the tests, execute `ctest` in the `build` directory

   ```shell
   ctest
   ```
