"use client";

import { useRef, useState } from "react";

export default function Home() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);

  const handleCTAButtonClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
      setIsHighlighted(true);
      setTimeout(() => setIsHighlighted(false), 2000);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 sm:p-16 bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800">
      <header className="flex justify-between items-center mb-12">
        <div className="text-2xl font-bold text-indigo-600">Calm Call</div>
        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#features" className="hover:text-indigo-600 transition">기능</a>
          <a href="#about" className="hover:text-indigo-600 transition">소개</a>
          <a href="#cta" className="hover:text-indigo-600 transition">시작하기</a>
        </nav>
      </header>

      <main className="flex flex-col items-center justify-center gap-20 text-center row-start-2 py-16">
        <section className="flex flex-col items-center gap-6">
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight leading-tight text-gray-900">
            콜포비아, 이제 극복.
          </h1>

          <p className="text-lg sm:text-xl mt-6 text-gray-700 leading-relaxed">
            맞춤형 대화 시나리오와 즉각적 답변 스크립트를 통해 콜포비아를 극복해요.
          </p>

          <a
            className="mt-8 px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
            href="#cta"
            onClick={handleCTAButtonClick}
          >
            얼리 액세스 신청
          </a>
        </section>

        <section id="features" className="max-w-4xl">
          <h2 className="text-3xl font-extrabold text-indigo-600 mb-8">Features</h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900">똑똑한 통화 대본</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                배달음식 주문을 하시나요? 병원 예약을 하시나요?
                미리 시나리오를 알려주시면 자연스러운 대본을 적어드려요.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900">실시간 대화 답변</h3>
              <p className="text-gray-700 mt-2 leading-relaxed">
                다음 대사가 걱정되신다고요?
                똑똑한 인공지능이 실시간 상황에 맞게 자연스러운 대화 답변을 알려줘요.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white shadow-lg rounded-xl p-8 sm:p-12 text-center max-w-3xl">
          <h2 className="text-3xl font-extrabold text-indigo-600">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            통화 준비가 부족하거나 예상치 못한 상황에 대처하기 어려워 고민했던 적이 있으신가요?
            Calm Call은 이러한 걱정을 덜어드리기 위해, 전화 통화 전에 미리 대본을 작성해주고,
            실시간 통화 상황별로 가장 적합한 맞춤형 답변 스크립트를 빠르게 제안합니다.
          </p>
        </section>
      </main>

      <footer id="cta" className="row-start-3 py-6 text-center">
        <h2 className="text-3xl font-extrabold text-indigo-600">Download</h2>

        <p className="mt-4 text-gray-600">
          현재 Calm Call은 개발 중에 있습니다. 출시되기 전 먼저 소식을 받아보세요.
          <br />
          이메일은 미리 출시 알람 외에 절대 사용되지 않습니다.
        </p>

        <form
          action="https://formspree.io/f/mjkkgplv"
          method="POST"
          className="mt-6 flex flex-col sm:flex-row justify-center gap-4"
        >
          <input
            ref={inputRef}
            type="email"
            placeholder="이메일 주소를 입력하세요"
            className={`px-4 py-3 rounded-md border shadow-sm focus:ring-2 focus:ring-indigo-500 w-full sm:w-auto ${isHighlighted ? "ring-2 ring-indigo-500" : ""}`}
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
          >
            먼저 소식 받기
          </button>
        </form>

        <p className="mt-6 text-gray-500 text-sm">
          <a
            href="https://github.com/MontyCoder0701"
            className="hover:underline text-indigo-600 font-medium"
          >
            개발자 문의
          </a>

          <span className="block sm:inline mx-2">•</span>
          © 2024 Calm Call. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
