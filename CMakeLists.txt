cmake_minimum_required(VERSION 3.14)

if (POLICY CMPO135)
  cmake_policy(SET CMP0135 NEW)
endif()

project(interview_prep VERSION 0.1.0 LANGUAGES C CXX)

set(CMAKE_CXX_STANDARD 14)
set(CMAKE_CXX_STANDARD_REQUIRED ON)

include(FetchContent)

FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.13.0.zip
  DOWNLOAD_EXTRACT_TIMESTAMP TRUE
)

FetchContent_MakeAvailable(googletest)

enable_testing()

file(GLOB_RECURSE SOURCE_FILES
  ${CMAKE_SOURCE_DIR}/src/**/*.cpp
  ${CMAKE_SOURCE_DIR}/src/**/*.cc
)

add_executable(
  interview_prep_tests
  ${SOURCE_FILES}
)

target_link_libraries(
  interview_prep_tests
  GTest::gtest_main
)

include(GoogleTest)
gtest_discover_tests(interview_prep_tests)
