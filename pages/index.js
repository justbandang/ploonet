import Header from "@/components/Header";
import Works from "@/components/Works";
import localFont from "next/font/local"; 
import Image from 'next/image'; 


const pretendardRegular = localFont({
  src: "./fonts/Pretendard-Regular.woff",
  variable: "--font-pretendard-regular",
  weight: "400",  
});

const pretendardMedium = localFont({
  src: "./fonts/Pretendard-Medium.woff",
  variable: "--font-pretendard-medium",
  weight: "500",  
});

const pretendardBold = localFont({
  src: "./fonts/Pretendard-Bold.woff",
  variable: "--font-pretendard-bold",
  weight: "700",  
});


export default function Home() {
  const smoothScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className={`${pretendardRegular.variable} ${pretendardBold.variable} ${pretendardMedium.variable} min-h-screen font-[family-name:var(--font-pretendard-regular)] bg-black`}>
      <a href="#" onClick={(e) => smoothScroll(e, 'contact')} className="hidden fixed w-[125px] h-[125px] md:flex flex-col items-center justify-center text-xl text-center gap-2 rounded-full bg-[url(/bg-images.png)] right-10 top-1/2 -translate-y-1/2 z-10">
        제작 <br/> 문의하기
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.6">
          <g clip-path="url(#clip0_1_1309)">
          <path d="M14.3801 20.561V17.8504H5.45003L21.1543 2.14608L19.2441 0.23584L3.53978 15.9413V7.01132H0.829102V20.5623H14.3801V20.561Z" fill="white"/>
          </g>
          </g>
          <defs>
          <clipPath id="clip0_1_1309">
          <rect width="20.3252" height="20.3252" fill="white" transform="translate(0.829102 0.23584)"/>
          </clipPath>
          </defs>
        </svg>

      </a>
      <Header/>
      <main className="md:pb-80">
        <div className="flex justify-center">
          <Image
            src="/main_banner.png" 
            alt="Deskripsi Gambar"
            className="h-[361px] object-cover md:h-auto" 
            width={1920}
            height={934}
          />
        </div>
        <div className="px-8 py-12 lg:p-20 flex flex-col items-center justify-center relative after:content-[url(/br-btm-sm.svg)] md:after:content-[url(/br-btm.svg)] after:absolute after:bottom-0 after:translate-y-2/4">
            <h1 className="hidden md:block text-2xl font-bold mt-12 bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent">영상 제작소</h1>
            <span className="lg:text-[2.75rem] md:text-[2rem] text-center w-full block text-2xl mt-5">당장 내일  <br className="inline md:hidden" /><span className="font-bold">‘고품질 맞춤 영상’</span>을 받아보세요.</span>
            <ul className="grid grid-flow-col mt-16">
                <li className="rounded-full w-[5.375rem] h-[5.375rem] md:w-[10.625rem] md:h-[10.625rem] lg:w-[13.25rem] lg:h-[13.25rem] bg-clip-border bg-gradient-to-b from-[#FF4E83] to-[#FFBB54] p-0.5 relative after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:bg-[#141414] after:right-0 after:top-[50%] after:translate-x-2/4 after:z-10">
                    <div className="flex flex-col h-full w-full items-center justify-center bg-[#141414] rounded-full">
                      <h1 className="md:text-[2rem] text-base md:w-[10.3125rem] text-center leading-[1.09375rem] md:leading-[2.375rem] font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent uppercase">FAST</h1>
                      <span className="hidden md:block text-2xl mt-2.5 font-medium bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent opacity-50">X2</span>
                    </div>
                </li>
                <li className="rounded-full w-[5.375rem] h-[5.375rem] md:w-[10.625rem] md:h-[10.625rem] lg:w-[13.25rem] lg:h-[13.25rem] bg-clip-border bg-gradient-to-b from-[#FF4E83] to-[#FFBB54] p-0.5 relative after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:bg-[#141414] after:right-0 after:top-[50%] after:translate-x-2/4 after:z-10">
                      <div className="flex flex-col h-full w-full items-center justify-center bg-[#141414] rounded-full">
                        <h1 className="md:text-[2rem] text-base md:w-[10.3125rem] text-center leading-[1.09375rem] md:leading-[2.375rem] font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent uppercase">Quality</h1>
                        <span className="hidden md:block text-2xl mt-2.5 font-medium bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent opacity-50">A++</span>
                      </div>
                </li>
                <li className="rounded-full w-[5.375rem] h-[5.375rem] md:w-[10.625rem] md:h-[10.625rem] lg:w-[13.25rem] lg:h-[13.25rem] bg-clip-border bg-gradient-to-b from-[#FF4E83] to-[#FFBB54] p-0.5 relative after:content-[''] after:absolute after:w-[4px] after:h-[4px] after:bg-[#141414] after:right-0 after:top-[50%] after:translate-x-2/4 after:z-10">
                    <div className="flex flex-col h-full w-full items-center justify-center bg-[#141414] rounded-full">
                      <h1 className="md:text-[2rem] text-base md:w-[10.3125rem] text-center leading-[1.09375rem] md:leading-[2.375rem] font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent uppercase">LOW PRICE </h1>
                      <span className="hidden md:block text-2xl mt-2.5 font-medium bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent opacity-50">1/2</span>
                    </div>
                </li>
                <li className="rounded-full w-[5.375rem] h-[5.375rem] md:w-[10.625rem] md:h-[10.625rem] lg:w-[13.25rem] lg:h-[13.25rem] bg-clip-border bg-gradient-to-b from-[#FF4E83] to-[#FFBB54] p-0.5">
                      <div className="flex flex-col h-full w-full items-center justify-center bg-[#141414] rounded-full">
                        <h1 className="md:text-[2rem] text-base md:w-[10.3125rem] text-center leading-[1.09375rem] md:leading-[2.375rem] font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent uppercase">High Tech</h1>
                        <span className="hidden md:block text-2xl mt-2.5 font-medium bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent opacity-50">Gen AI</span>
                      </div>
                </li>
            </ul>
            <h2 className="text-lg md:text-[2rem] font-bold mt-8 md:mt-16 mb-4 md:mb-8">AI VIDEO ON YOUR DEMAND</h2>
            <p className="md:w-[42.625rem] text-center text-base md:text-xl dark:text-gray-400 leading-6 tracking-tight"> 
              가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
            </p>
            <p className="md:w-[42.625rem] text-center text-base md:text-xl dark:text-gray-400 leading-6 mt-8 tracking-tight">
              가격은 절반으로, 속도는 두배로, 품질은 A++! 기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등 당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
            </p>
        </div>
        <div className="px-0 py-12 lg:py-20 flex flex-col items-center justify-center">
          <h1 className="md:text-5xl font-bold text-xl relative after:content-[''] after:rounded-full after:absolute after:left-[-10px] after:top-[-2px] after:md:left-[-22px] after:md:top-[-12px] after:w-2 after:h-2 after:md:w-4 after:md:h-4 after:bg-gradient-to-r after:from-[#FF4E83] after:to-[#FFBB54]">PREVIOUS WORKS</h1>
          <Works/>
        </div>
        <div className="px-5 py-12 lg:p-10 2xl:p-16 flex flex-col items-center justify-center">
          <h1 className="md:text-5xl font-bold text-xl relative after:content-[''] after:rounded-full after:absolute after:left-[-10px] after:top-[-2px] after:md:left-[-22px] after:md:top-[-12px] after:w-2 after:h-2 after:md:w-4 after:md:h-4 after:bg-gradient-to-r after:from-[#FF4E83] after:to-[#FFBB54]">MAKING PROCESS</h1>
          <ul className="grid xl:grid-cols-2 grid-cols-1 gap-12 md:mt-14 mt-8 w-full">
              <li className="md:bg-[#141414] bg-transparent border-white border-0 md:border rounded-[1.25rem] md:p-20 text-center">
                  <h1 className="md:text-[2.75rem] text-[1.375rem] font-bold">일반 제작</h1>
                  <span className="md:text-2xl text-base">제작 시작 후 5영업일 이내</span>
                  <ol className="md:mt-12 mt-8 flex flex-col gap-6">
                    <li className="flex bg-[#141414] items-center justify-center 2xl:gap-8 xl:gap-6 lg:gap-10 md:gap-10 gap-6 md:w-full md:h-[103px] h-[89px] border border-white border-opacity-10 rounded-2xl md:rounded-full 2xl:px-20 lg:px-12 md:px-16 px-5 relative after:content-[url(/arrow_down_bold.svg)] after:absolute after:bottom-[-17px] after:left-1/2 after:-translate-x-1/2">
                        <div className="flex flex-col items-start">
                            <span className="md:text-base text-xs bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] text-transparent">STEP1</span>
                            <span className="md:text-xl xl:text-base 2xl:text-xl text-base font-bold">사전 논의</span>
                        </div>
                        <div className="md:text-base text-sm text-[#AAAAAA] leading-6 text-left xl:w-[14rem] md:w-72 w-52">
                          영상 제작 문의를 통해 의뢰 확인 후 상담을 통해 방향 설정 및 내용 협의
                        </div>
                    </li>
                    <li className="flex bg-[#141414] items-center justify-center 2xl:gap-8 xl:gap-6 lg:gap-10 md:gap-10 gap-6 md:w-full md:h-[103px] h-[89px] border border-white border-opacity-10 rounded-2xl md:rounded-full 2xl:px-20 lg:px-12 md:px-16 px-5 relative after:content-[url(/arrow_down_bold.svg)] after:absolute after:bottom-[-17px] after:left-1/2 after:-translate-x-1/2">
                        <div className="flex flex-col items-start">
                            <span className="md:text-base text-xs bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] text-transparent">STEP2</span>
                            <span className="md:text-xl xl:text-base 2xl:text-xl text-base font-bold">영상 기획</span>
                        </div>
                        <div className="md:text-base text-sm text-[#AAAAAA] leading-6 text-left xl:w-[14rem] md:w-72 w-52">
                        스토리보드 전달&수정을 통한 기획안 확정 가상인간 발화용 스크립트 작성과 프롬프팅
                        </div>
                    </li>
                    <li className="flex bg-[#141414] items-center justify-center 2xl:gap-8 xl:gap-6 lg:gap-10 md:gap-10 gap-6 md:w-full md:h-[103px] h-[89px] border border-white border-opacity-10 rounded-2xl md:rounded-full 2xl:px-20 lg:px-12 md:px-16 px-5 relative after:content-[url(/arrow_down_bold.svg)] after:absolute after:bottom-[-17px] after:left-1/2 after:-translate-x-1/2">
                        <div className="flex flex-col items-start">
                            <span className="md:text-base text-xs bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] text-transparent">STEP3</span>
                            <span className="md:text-xl xl:text-base 2xl:text-xl text-base font-bold">영상 생성</span>
                        </div>
                        <div className="md:text-base text-sm text-[#AAAAAA] leading-6 text-left xl:w-[14rem] md:w-72 w-52">
                        작성한 스크립트로 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성
                        </div>
                    </li>
                    <li className="flex bg-[#141414] items-center justify-center 2xl:gap-8 xl:gap-6 lg:gap-10 md:gap-10 gap-6 md:w-full md:h-[103px] h-[89px] border border-white border-opacity-10 rounded-2xl md:rounded-full 2xl:px-20 lg:px-12 md:px-16 px-5 relative after:content-[url(/arrow_down_bold.svg)] after:absolute after:bottom-[-17px] after:left-1/2 after:-translate-x-1/2">
                        <div className="flex flex-col items-start">
                            <span className="md:text-base text-xs bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] text-transparent">STEP4</span>
                            <span className="md:text-xl xl:text-base 2xl:text-xl text-base font-bold">영상 편집</span>
                        </div>
                        <div className="md:text-base text-sm text-[#AAAAAA] leading-6 text-left xl:w-[14rem] md:w-72 w-52">
                        영상 전문가의 편집, 디자인, 후반 작업 단계 필요시 실사 촬영 병행하여 편집본 완성
                        </div>
                    </li>
                    <li className="flex bg-[#141414] items-center justify-center 2xl:gap-8 xl:gap-6 lg:gap-10 md:gap-10 gap-6 md:w-full md:h-[103px] h-[89px] border border-white border-opacity-10 rounded-2xl md:rounded-full 2xl:px-20 lg:px-12 md:px-16 px-5">
                        <div className="flex flex-col items-start">
                            <span className="md:text-base text-xs bg-clip-text bg-gradient-to-r from-[#FF7E7E] to-[#F05F82] text-transparent">STEP5</span>
                            <span className="md:text-xl xl:text-base 2xl:text-xl text-base font-bold">최종 납품</span>
                        </div>
                        <div className="md:text-base text-sm text-[#AAAAAA] leading-6 text-left xl:w-[14rem] md:w-72 w-52">
                        고객 피드백 반영하여 최종본 완성 및 납품 * 영상 수정 무료 1회 제공
                        </div>
                    </li>
                  </ol>
              </li>
              <li className="rounded-[1.25rem] md:bg-gradient-to-b md:from-[#FF4E83] md:to-[#FFBB54] md:p-0.5">
                <div className="flex flex-col h-full w-full rounded-[1.25rem] md:py-20 items-center md:bg-[#141414]">
                  <h1 className="md:text-[2.75rem] text-[1.375rem] font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent relative after:content-['TM'] after:absolute after:bg-clip-text after:bg-gradient-to-r after:font-bold after:from-[#FF4E83] after:to-[#FFBB54] after:text-transparent after:text-lg after:right-[-24px] after:top-2.5">Ploonet Quickserve</h1>
                  <span className="md:text-2xl text-base">제작 시작 후 12~48시간 이내</span>
                  <ol className="md:mt-12 mt-8 w-full flex flex-col gap-6 rounded-[1.25rem] md:bg-none bg-gradient-to-b from-[#FF4E83] to-[#FFBB54] p-0.5">
                    <div className="h-full w-full rounded-[1.25rem] bg-[#141414] px-7 xl:px-20 lg:px-32 md:px-20 py-11">
                      <li className="flex items-center md:w-full gap-5 md:gap-9 mb-7 relative after:content-[''] after:w-[75%] after:h-px after:border-white after:border after:border-opacity-10 after:block after:absolute after:bottom-0 after:right-0 pb-7">
                          <div className="w-[82px] h-[82px] md:w-[134px] md:h-[134px] flex flex-col items-center p-3 rounded-[1.1875rem] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54]">
                              <span className="text-xs md:text-lg mb-2">STEP1</span>
                              <svg width="40" height="51" viewBox="0 0 40 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7" clip-path="url(#clip0_1_1185)">
                                <path d="M29.572 11.5621C28.7128 11.5621 28.0156 10.8525 28.0156 9.97826V0H0V51H40V11.5621H29.572ZM7.93774 8.39441H20.5447C21.4039 8.39441 22.1012 9.10398 22.1012 9.97826C22.1012 10.8525 21.4039 11.5621 20.5447 11.5621H7.93774C7.0786 11.5621 6.38132 10.8525 6.38132 9.97826C6.38132 9.10398 7.0786 8.39441 7.93774 8.39441ZM24.7471 42.4472H7.93774C7.0786 42.4472 6.38132 41.7376 6.38132 40.8634C6.38132 39.9891 7.0786 39.2795 7.93774 39.2795H24.7471C25.6062 39.2795 26.3035 39.9891 26.3035 40.8634C26.3035 41.7376 25.6062 42.4472 24.7471 42.4472ZM32.0623 31.9938H7.93774C7.0786 31.9938 6.38132 31.2842 6.38132 30.4099C6.38132 29.5357 7.0786 28.8261 7.93774 28.8261H32.0623C32.9214 28.8261 33.6187 29.5357 33.6187 30.4099C33.6187 31.2842 32.9214 31.9938 32.0623 31.9938ZM32.0623 22.0155H7.93774C7.0786 22.0155 6.38132 21.306 6.38132 20.4317C6.38132 19.5574 7.0786 18.8478 7.93774 18.8478H32.0623C32.9214 18.8478 33.6187 19.5574 33.6187 20.4317C33.6187 21.306 32.9214 22.0155 32.0623 22.0155Z" fill="white"/>
                                <path d="M39.8039 8.39442C39.709 8.20277 39.5829 8.02697 39.4257 7.87808L31.8086 0.66206C31.6078 0.471998 31.3759 0.321532 31.1284 0.210663V8.396H39.8039V8.39442Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_1185">
                                <rect width="40" height="51" fill="white"/>
                                </clipPath>
                                </defs>
                              </svg>
                          </div>
                          <div className="flex flex-col gap-1.5 w-52 md:w-80">
                              <span className="font-bold text-lg md:text-2xl">제작 안내</span>
                              <span className="text-sm md:text-lg text-[#CCCCCC]">영상 제작 문의를 통해 의뢰 확인 후 견적 및 진행 순서 안내</span>
                          </div>
                        </li>
                        <li className="flex items-center md:w-full gap-5 md:gap-9 mb-7 relative after:content-[''] after:w-[75%] after:h-px after:border-white after:border after:border-opacity-10 after:block after:absolute after:bottom-0 after:right-0 pb-7">
                          <div className="w-[82px] h-[82px] md:w-[134px] md:h-[134px] flex flex-col items-center p-3 rounded-[1.1875rem] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54]">
                              <span className="text-xs md:text-lg mb-2">STEP2</span>
                              <svg width="57" height="46" viewBox="0 0 57 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g opacity="0.7">
                              <path d="M12.0011 16.2854C16.3301 16.2854 19.8385 13.3232 19.8385 9.66825C19.8385 6.01328 16.3301 3.05283 12.0011 3.05283C7.6721 3.05283 4.16367 6.01501 4.16367 9.66999C4.16367 13.325 7.6721 16.2871 12.0011 16.2871V16.2854Z" fill="white"/>
                              <path d="M40.7211 8.32713C40.8014 3.86374 36.5809 0.190503 31.2944 0.122724C26.008 0.0549449 21.6573 3.61829 21.5771 8.08168C21.4968 12.5451 25.7172 16.2183 31.0037 16.2861C36.2902 16.3539 40.6408 12.7905 40.7211 8.32713Z" fill="white"/>
                              <path d="M36.6268 17.8991H6.88114C3.08068 17.8991 0 20.5018 0 23.7106V39.3983C0 42.6071 3.08068 45.2081 6.88114 45.2081H36.6268C40.4272 45.2081 43.5079 42.6071 43.5079 39.3983V26.1171H9.24821C8.48729 26.1171 7.87239 25.598 7.87239 24.9555C7.87239 24.3131 8.48935 23.7939 9.24821 23.7939H43.5079V23.7123C43.5079 20.5036 40.4272 17.9026 36.6268 17.9026V17.8991ZM9.39833 35.2294C10.7885 35.2294 11.9135 36.1809 11.9135 37.3529C11.9135 38.525 10.7865 39.4765 9.39833 39.4765C8.01018 39.4765 6.8832 38.525 6.8832 37.3529C6.8832 36.1809 8.01018 35.2294 9.39833 35.2294Z" fill="white"/>
                              <path d="M52.5897 23.0066L46.7204 26.0209C46.4304 26.1702 46.2535 26.4341 46.2535 26.7206V36.385C46.2535 36.6715 46.4304 36.9372 46.7204 37.0848L52.5897 40.099C54.3912 41.0245 56.6986 39.9289 56.6986 38.1474V24.9565C56.6986 23.175 54.3912 22.0811 52.5897 23.0049V23.0066Z" fill="white"/>
                              </g>
                              </svg>
                          </div>
                          <div className="flex flex-col gap-1.5 w-52 md:w-80">
                              <span className="font-bold text-lg md:text-2xl">영상 생성</span>
                              <span className="text-sm md:text-lg text-[#CCCCCC]">스크립트 수신 즉시 가상인간 영상 생성 그외 이미지, 배경 음악 등 필요 요소 생성</span>
                          </div>
                        </li>
                        <li className="flex items-center md:w-full gap-5 md:gap-9">
                          <div className="w-[82px] h-[82px] md:w-[134px] md:h-[134px] flex flex-col items-center p-3 rounded-[1.1875rem] bg-gradient-to-br from-[#FF4E83] to-[#FFBB54]">
                              <span className="text-xs md:text-lg mb-2">STEP3</span>
                              <svg width="60" height="55" viewBox="0 0 60 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.7" clip-path="url(#clip0_1_1209)">
                                <path d="M0 50.0948C0 51.075 0.794457 51.8645 1.78076 51.8645H12.129V48.3252H1.78301C0.796714 48.3252 0 49.1147 0 50.0948Z" fill="white"/>
                                <path d="M57.3702 48.3252H20.4437V51.8645H57.3702C58.3565 51.8645 59.1509 51.075 59.1509 50.0948C59.1509 49.1147 58.3565 48.3252 57.3702 48.3252Z" fill="white"/>
                                <path d="M16.2886 45.1896C15.3046 45.1896 14.5079 45.9814 14.5079 46.9593V53.2281C14.5079 54.206 15.3046 54.9978 16.2886 54.9978C17.2727 54.9978 18.0694 54.206 18.0694 53.2281V46.9593C18.0694 45.9814 17.2727 45.1896 16.2886 45.1896Z" fill="white"/>
                                <path d="M55.7429 0H3.4103C1.53023 0 0 1.52068 0 3.389V39.6946C0 41.5629 1.53023 43.0836 3.4103 43.0836H55.7429C57.623 43.0836 59.1532 41.5629 59.1532 39.6946V3.389C59.1532 1.52068 57.623 0 55.7429 0ZM29.5755 35.1011C22.0507 35.1011 15.932 29.0184 15.932 21.5407C15.932 14.0629 22.053 7.98018 29.5755 7.98018C37.098 7.98018 43.2189 14.0629 43.2189 21.5407C43.2189 29.0184 37.098 35.1011 29.5755 35.1011Z" fill="white"/>
                                <path d="M35.5542 20.0133L27.5826 15.357C26.3931 14.6617 24.8922 15.514 24.8922 16.8867V26.1991C24.8922 27.5695 26.3909 28.4218 27.5826 27.7288L35.5542 23.0725C36.7278 22.3862 36.7278 20.6996 35.5542 20.0133Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1_1209">
                                <rect width="59.1509" height="55" fill="white"/>
                                </clipPath>
                                </defs>
                              </svg>
                          </div>
                          <div className="flex flex-col gap-1.5 w-52 md:w-80">
                              <span className="font-bold text-lg md:text-2xl">편집 및 납품</span>
                              <span className="text-sm md:text-lg text-[#CCCCCC]">편집 진행, 12~48시간 내 최종본 완성 및 납품</span>
                          </div>
                        </li>
                    </div>
                  </ol>
                </div>
              </li>
          </ul>
          <p className="text-[#999999] text-[0.625rem] md:text-sm md:mt-12 mt-5 text-center block md:w-full">* 2~3분, 표준 견적에 따르는 일반 영상편집에 한정되며, 모션그래픽 등 전문 작업이 필요할 경우 작업 기간은 조정될 수 있습니다.</p>
          <p className="text-[#999999] text-[0.625rem] md:text-sm md:mt-0 mt-4 text-center block md:w-full">** 영상의 길이, 영상 제작에 필요한 수준에 따라 빠른 작업이 불가할 수 있으며, 클라이언트와의 협의를 통해 작업 기간을 조정할 수 있습니다.</p>
        </div>
        <div id="contact" className="px-5 py-12 lg:p-10 2xl:p-44 flex flex-col items-center justify-center">
        <h1 className="text-lg font-bold bg-clip-text bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] text-transparent">영상 제작 문의</h1>
        <span className="lg:text-[2.75rem] md:text-[2rem] text-center w-full block text-2xl mt-5"><span className="font-bold">영상 제작이 필요하다면,</span> <br className="inline md:hidden" />지금 문의 주세요.</span>
        <p className="text-base text-[#AAAAAA] text-center mt-[1.125rem]">여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가 즉시 연락 드리겠습니다.</p>
        <form className="mt-6 w-full md:w-3/4 lg:w-4/5 xl:w-3/5 flex flex-col items-center">
          <h1 className="font-bold text-base text-[#666666] text-center">E-MAIL</h1>
          <span className="text-base mb-5">henry.lim@saltlux.com</span>
          <div class="mb-4 w-full relative inline-flex">
          <svg className="absolute top-3 right-3 m-4 pointer-events-none" width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L9.5 9.5L17 2" stroke="url(#paint0_linear_590_11)" stroke-width="4" stroke-linecap="round"/>
            <defs>
            <linearGradient id="paint0_linear_590_11" x1="2" y1="2" x2="8" y2="14" gradientUnits="userSpaceOnUse">
            <stop stop-color="#FF4E83"/>
            <stop offset="1" stop-color="#FFBB54"/>
            </linearGradient>
            </defs>
          </svg>
          <select class="bg-[#141414] border border-white px-8 py-5 w-full border-opacity-10 text-[#CCCCCC] text-base font-bold rounded-lg focus:outline-none appearance-none">
            <option>영상 유형 선택</option>
            <option>MP4</option>
            <option>AVI</option>
            <option>MOV</option>
            <option>WMV</option>
            <option>MKV</option>
            <option>FLV</option>
            <option>MPEG</option>
          </select>
          </div>
          <div class="mb-4 w-full">
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">연락 받으실 담당자 성함</label>
            <input type="text" id="name" class="shadow-sm px-8 py-5 bg-[#141414] border border-white border-opacity-10 text-[#CCCCCC] text-base font-bold rounded-lg block focus:outline-none w-full p-2.5 " placeholder="연락 받으실 담당자 성함" required />
          </div>
          <div class="mb-4 w-full">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">이메일</label>
            <input type="password" id="password" class="shadow-sm px-8 py-5 bg-[#141414] border border-white border-opacity-10 text-[#CCCCCC] text-base font-bold rounded-lg block focus:outline-none w-full p-2.5 " placeholder="이메일" required />
          </div>
          <div class="mb-4 w-full">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">휴대폰 번호</label>
            <input type="email" id="email" class="shadow-sm px-8 py-5 bg-[#141414] border border-white border-opacity-10 text-[#CCCCCC] text-base font-bold rounded-lg block focus:outline-none w-full p-2.5" placeholder="휴대폰 번호" required />
          </div>
          <div class="mb-4 w-full">
            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">의뢰하실 영상내용</label>
            <textarea id="message" rows="4" class="block p-8 w-full text-base bg-[#141414] border border-white border-opacity-10 text-[#CCCCCC] rounded-lg focus:outline-none" placeholder="의뢰하실 영상내용"></textarea>
          </div>
          <div class="mb-4 w-full">
            <label for="reference-video" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white sr-only">참고 영상</label>
            <input type="text" id="reference-video" class="shadow-sm px-8 py-5 bg-[#141414] border border-white border-opacity-10 text-[#CCCCCC] text-base font-bold rounded-lg focus:outline-none block w-full p-2.5" placeholder="참고 영상" required />
          </div>
          <div className="mt-16 flex items-start gap-1 md:w-full md:mt-0">
              <span className="font-bold text-2xl text-[#FF6D51]">*</span>
              <span className="text-xs text-[#FF6D51] leading-6"> 참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를 적어주시면 더 정확히 안내해드리겠습니다.</span>
          </div>
          <div className="mt-16 w-full flex flex-col md:flex-row md:items-center md:justify-between">
            <div class="inline-flex items-center">
              <label class="flex items-center cursor-pointer relative" for="check-2">
                <input type="checkbox"
                  className="peer h-4 w-4 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                  id="check-2" />
                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM11.2243 5.57574C11.4586 5.81005 11.4586 6.18995 11.2243 6.42426L7.22426 10.4243C6.98995 10.6586 6.61005 10.6586 6.37574 10.4243L4.77574 8.82426C4.54142 8.58995 4.54142 8.21005 4.77574 7.97574C5.01005 7.74142 5.38995 7.74142 5.62426 7.97574L6.8 9.15147L8.58787 7.3636L10.3757 5.57574C10.6101 5.34142 10.9899 5.34142 11.2243 5.57574Z" fill="white"/>
                </svg>
                </span>
              </label>
              <label className="cursor-pointer ml-2 text-[#CCCCCC] text-sm" for="check-2">
                  <span className="underline">개인정보처리방침</span>에 동의합니다.
              </label>
            </div>
            <button type="submit" className="text-base md:text-xl font-bold bg-[#FF6D51] w-full md:w-auto md:py-4 md:px-7 md:h-16 h-[43px] flex items-center justify-center rounded-lg mt-[3.75rem] md:mt-0">문의 보내기</button>
          </div>
        </form>
        </div>
      </main>
    </div>
  );
}
