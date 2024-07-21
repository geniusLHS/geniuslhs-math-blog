import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import Logo from "./components/logo";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  useNextSeoProps() {
    return {
      titleTemplate: "%s – P^2e^2",
    };
  },
  logo: (
    <div className="nx-flex nx-items-center">
      <Logo className="nx-mr-2" />
      페페의 수학탐험일지
    </div>
  ),
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    const url = "https://math.geniuslhs.com" + asPath;

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "P^2e^2"} />
        <meta property="og:description" content={frontMatter.description || "페페의 수학탐험일지"} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </>
    );
  },
  project: {
    link: "https://github.com/geniusLHS/geniuslhs-math-blog",
  },
  search: {
    emptyResult: "검색 결과 없음",
    loading: "로딩중...",
    error: "에러 발생",
    placeholder: "검색",
  },
  docsRepositoryBase: "https://github.com/geniusLHS/geniuslhs-math-blog",
  toc: {
    title: "목차",
    backToTop: true,
  },
  editLink: {
    component: null,
  },
  feedback: {
    content: "오류 제보 및 피드백",
  },
  footer: {
    text: "© 2024 geniusLHS",
  },
};

export default config;
