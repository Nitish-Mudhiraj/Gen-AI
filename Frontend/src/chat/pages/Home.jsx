import React, { useEffect, useState } from "react";
import { useauth } from "../useauth/Useauth";

const Home = () => {

  const {
    messages,
    chats,
    handleCreateChat,
    handleGetOneChat,
    handleGetAllChats
  } = useauth();

  const [message, setMessage] = useState("");


  useEffect(()=>{
    handleGetAllChats()
  },[])

  async function sendchat() {

    if (!message.trim()) {
      return;
    }

    try {

      await handleCreateChat(message.trim());

      setMessage("");

    } catch (error) {

      console.log("SEND CHAT ERROR:", error);

    }
  }


  // ================= UI =================

  return (

    <div className="h-screen w-full bg-[#212121] text-white flex overflow-hidden">


      {/* =====================================================
          SIDEBAR
      ====================================================== */}

      <aside className="w-[270px] bg-[#171717] flex flex-col border-r border-white/5">


        {/* LOGO */}

        <div className="h-[64px] flex items-center px-5">

          <div className="flex items-center gap-3">

            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">

              <span className="text-black font-bold text-sm">
                P
              </span>

            </div>

            <h1 className="text-[17px] font-semibold tracking-tight">
              Perplexity
            </h1>

          </div>

        </div>



        {/* NEW CHAT */}

        <div className="px-3 mt-2">

          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              bg-[#2f2f2f]
              hover:bg-[#383838]
              transition
              text-sm
              font-medium
            "
          >

            <span className="text-lg">
              +
            </span>

            New chat

          </button>

        </div>



        {/* SEARCH */}

        <div className="px-3 mt-3">

          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              rounded-xl
              text-[#b4b4b4]
              hover:bg-[#2a2a2a]
              hover:text-white
              transition
              text-sm
            "
          >

            <span className="text-base">
              ⌕
            </span>

            Search

          </button>

        </div>



        {/* =====================================================
            RECENTS
        ====================================================== */}

        <div className="flex-1 overflow-y-auto mt-6 px-3">

          <div className="px-3 mb-3">

            <p className="text-xs font-medium text-[#8e8e8e] uppercase tracking-wider">
              Recents
            </p>

          </div>


          {chats?.map((chat) => (

            <button
              key={chat._id}
              onClick={() => handleGetOneChat(chat._id)}
              className="
                w-full
                text-left
                px-3
                py-2.5
                rounded-lg
                hover:bg-[#2a2a2a]
                transition
              "
            >

              <p className="text-sm text-[#e5e5e5] truncate">
                {chat.title}
              </p>

            </button>

          ))}


         {chats.length === 0 && (
  <p className="px-3 text-xs text-[#666]">
    No recent chats
  </p>
)}

        </div>



        {/* =====================================================
            USER
        ====================================================== */}

        <div className="p-3 border-t border-white/5">

          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-xl
              hover:bg-[#252525]
              transition
            "
          >

            <div
              className="
                w-9
                h-9
                rounded-full
                bg-gradient-to-br
                from-indigo-500
                to-purple-600
                flex
                items-center
                justify-center
                text-sm
                font-semibold
              "
            >
              N
            </div>


            <div className="flex-1 text-left">

              <p className="text-sm font-medium">
                Nitish
              </p>

              <p className="text-xs text-[#8b8b8b]">
                Free plan
              </p>

            </div>


            <span className="text-[#777]">
              ⋯
            </span>

          </button>

        </div>

      </aside>



      {/* =====================================================
          MAIN AREA
      ====================================================== */}

      <main className="flex-1 flex flex-col relative">


        {/* =====================================================
            TOP BAR
        ====================================================== */}

        <header
          className="
            h-[64px]
            flex
            items-center
            justify-between
            px-6
            border-b
            border-white/5
          "
        >

          <div className="flex items-center gap-3">

            <button
              className="
                text-[#a0a0a0]
                hover:text-white
                transition
                text-xl
              "
            >
              ☰
            </button>


            <span className="text-sm text-[#a5a5a5]">
              {messages.length > 0 ? "Chat" : "New chat"}
            </span>

          </div>


          <button
            className="
              px-4
              py-2
              rounded-lg
              bg-white
              text-black
              text-sm
              font-medium
              hover:bg-gray-200
              transition
            "
          >
            Upgrade
          </button>

        </header>



        {/* =====================================================
            CHAT CONTENT
        ====================================================== */}

        <section className="flex-1 overflow-y-auto">


          <div
            className="
              max-w-[820px]
              mx-auto
              px-6
              pt-10
              pb-40
            "
          >


            {/* =================================================
                EMPTY STATE
            ================================================== */}

            {messages.length === 0 && (

              <div className="pt-[10vh]">

                <div className="text-center">

                  <h2
                    className="
                      text-3xl
                      md:text-4xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    What can I help you with?
                  </h2>


                  <p
                    className="
                      mt-3
                      text-[#8e8e8e]
                      text-sm
                    "
                  >
                    Ask anything and get an intelligent answer.
                  </p>

                </div>



                {/* SUGGESTIONS */}

                <div
                  className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-3
                    mt-10
                  "
                >

                  <button
                    className="
                      text-left
                      p-4
                      rounded-xl
                      border
                      border-white/10
                      bg-[#252525]
                      hover:bg-[#2d2d2d]
                      transition
                    "
                  >

                    <p className="text-sm font-medium">
                      Explain a concept
                    </p>

                    <p className="text-xs text-[#858585] mt-1">
                      Help me understand something clearly
                    </p>

                  </button>



                  <button
                    className="
                      text-left
                      p-4
                      rounded-xl
                      border
                      border-white/10
                      bg-[#252525]
                      hover:bg-[#2d2d2d]
                      transition
                    "
                  >

                    <p className="text-sm font-medium">
                      Write some code
                    </p>

                    <p className="text-xs text-[#858585] mt-1">
                      Build or debug something
                    </p>

                  </button>



                  <button
                    className="
                      text-left
                      p-4
                      rounded-xl
                      border
                      border-white/10
                      bg-[#252525]
                      hover:bg-[#2d2d2d]
                      transition
                    "
                  >

                    <p className="text-sm font-medium">
                      Learn something new
                    </p>

                    <p className="text-xs text-[#858585] mt-1">
                      Get a simple explanation
                    </p>

                  </button>



                  <button
                    className="
                      text-left
                      p-4
                      rounded-xl
                      border
                      border-white/10
                      bg-[#252525]
                      hover:bg-[#2d2d2d]
                      transition
                    "
                  >

                    <p className="text-sm font-medium">
                      Solve a problem
                    </p>

                    <p className="text-xs text-[#858585] mt-1">
                      Work through a problem step by step
                    </p>

                  </button>

                </div>

              </div>

            )}



            {/* =================================================
                REAL MESSAGES
            ================================================== */}

            {messages.map((msg, index) => {

              const isUser =
                msg.role?.toLowerCase() === "user";


              return (

                <div
                  key={msg._id || index}
                  className={`
                    flex
                    ${isUser ? "justify-end" : "justify-start"}
                    mb-8
                  `}
                >

                  <div
                    className={`
                      ${isUser ? "max-w-[75%]" : "max-w-[85%]"}
                    `}
                  >


                    {/* ================= USER ================= */}

                    {isUser && (

                      <>

                        <div className="flex justify-end mb-2">

                          <span className="text-xs text-[#8e8e8e]">
                            You
                          </span>

                        </div>


                        <div
                          className="
                            bg-[#2f2f2f]
                            rounded-2xl
                            rounded-br-md
                            px-5
                            py-3.5
                            text-sm
                            text-[#e5e5e5]
                          "
                        >
                          {msg.content}
                        </div>

                      </>

                    )}



                    {/* ================= AI ================= */}

                    {!isUser && (

                      <>

                        <div className="flex items-center gap-2 mb-3">

                          <div
                            className="
                              w-7
                              h-7
                              rounded-full
                              bg-white
                              text-black
                              flex
                              items-center
                              justify-center
                              text-xs
                              font-bold
                            "
                          >
                            P
                          </div>


                          <span className="text-sm font-medium">
                            Perplexity
                          </span>

                        </div>


                        <div
                          className="
                            text-[15px]
                            leading-7
                            text-[#d4d4d4]
                            whitespace-pre-wrap
                          "
                        >
                          {msg.content}
                        </div>

                      </>

                    )}

                  </div>

                </div>

              );

            })}

          </div>

        </section>



        {/* =====================================================
            MESSAGE INPUT
        ====================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            bg-gradient-to-t
            from-[#212121]
            via-[#212121]
            to-transparent
            pt-10
            pb-5
          "
        >

          <div className="max-w-[820px] mx-auto px-6">


            <div
              className="
                bg-[#2f2f2f]
                border
                border-white/10
                rounded-2xl
                shadow-2xl
                overflow-hidden
              "
            >


              {/* TEXTAREA */}

              <textarea
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                onKeyDown={(e) => {

                  if (e.key === "Enter" && !e.shiftKey) {

                    e.preventDefault();

                    sendchat();

                  }

                }}
                rows="1"
                placeholder="Ask anything..."
                className="
                  w-full
                  resize-none
                  bg-transparent
                  outline-none
                  px-5
                  pt-4
                  pb-3
                  text-sm
                  text-white
                  placeholder:text-[#777]
                "
              />



              {/* CONTROLS */}

              <div
                className="
                  flex
                  items-center
                  justify-between
                  px-4
                  pb-3
                "
              >

                <div className="flex items-center gap-2">


                  <button
                    className="
                      w-8
                      h-8
                      rounded-lg
                      hover:bg-[#404040]
                      text-[#aaa]
                      transition
                    "
                  >
                    +
                  </button>


                  <button
                    className="
                      px-3
                      py-1.5
                      rounded-lg
                      text-xs
                      text-[#aaa]
                      hover:bg-[#404040]
                      transition
                    "
                  >
                    Web search
                  </button>

                </div>



                {/* SEND BUTTON */}

                <button
                  onClick={sendchat}
                  disabled={!message.trim()}
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-white
                    text-black
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-200
                    transition
                    disabled:opacity-40
                    disabled:cursor-not-allowed
                  "
                >
                  ↑
                </button>

              </div>

            </div>


            <p
              className="
                text-center
                text-[11px]
                text-[#666]
                mt-2
              "
            >
              AI can make mistakes. Check important information.
            </p>

          </div>

        </div>

      </main>

    </div>
  );
};

export default Home;