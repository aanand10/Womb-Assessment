import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { credentials } from "../Credentials";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (credentials.username === email && credentials.password === password) {
      setDataToSessionStorage();
      navigate("/");
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };
  const setDataToSessionStorage = () => {
    sessionStorage.setItem("authStatus", "Success");
  };

  console.log(sessionStorage);

  return (
    <main className="flex justify-between w-screen items-center h-screen bg-[#FFF]">
      <div className="w-2/3 h-full relative flex justify-center items-center ">
        <div className="absolute top-14 left-10">
          <svg
            width="109"
            height="99"
            viewBox="0 0 109 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect width="109" height="99" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image0_1_419"
                  transform="matrix(0.00454545 0 0 0.005 -0.122727 0)"
                />
              </pattern>
              <image
                id="image0_1_419"
                width="400"
                height="200"
                xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAADICAYAAADGFbfiAAAYd0lEQVR4Ae2de+yfVX3HLaVsdqKVcilQCBdpKxYtQoVeBSx0BX79tT9wZEh0yGSM4XTqWAbCmDgJF8NVJK4GheAm4bKGS8tKLzRelripbP5hYmZiNjPnFrcYJdFkO8vny5769Ok5z/Wc85zLq0nzfS7nfM7n83rOeX9+z+08r3kN/yAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhBwQEDtnVFd/jtwAZMQgAAEIBATgS5JQ1c2pljxFQIQgAAELBDQJYOh2yy4hQkIQAACEAiZwNBEUVc/5LjxDQIQgAAEehKoE37b+3q6SDUIQAACEAiNgO0E0cZeaAzwBwIQgAAEOhJoI/auynR0leIQgAAEIBASAVfJoa3dkFjgCwQgAAEItCTQVuRdl2vpLsUgAAEIQCAEAq6TQhf7IfDABwhAAAIQaEGgi7j7KtvCbYpAAAIQgMDYBHwlha7tjM2F9iEAAQhAoIZAV1H3Wb7GbXZBAAIQgMDYBHwmhD5tjc2H9iEAAQhAQEOgj6D7rqNxm00QgAAEIDA2Ad/JoE97YzOifQhAAAIQqBDoI+Zj1am4zioEIAABCIxJYKxk0KfdMTnRNgQgAIFRCbQRTZ8OtvEnpDI+2dAWBCAAgdEJDBVglwEM9W2M+i55YBsCEIBAEARsi6uLoGz76MOeCw7YhAAEIBAMAZdCaitIlz66tG0rfuxAAAIQCI6AS/Es2x4aeNlWTMtD46Y+BCAAgSAJ+BbiIRB8+2qrvSExUxcCEIBAkARsCWRXO31gdG0jpPJ94qUOBCAAgaAJjC2yXeCM7euQ9rvESVkIQAACwRMYIog267YFZbNN37baxkg5CEAAAlEQ8C2ide21AVZXP/R9beKjDAQgAIFoCIQmunXgQvO1qz91sbEPAhCAQHQEuoqg6/J1AF237dp+XWzsgwAEIBAdAdei2ce+CWIfWyHVMcXFdghAAAJREghJYMu+6GCW98e4rIuJbRCAAASiJRCyEFehhuxrG9+q8bAOAQhAIGoCbYRvrDJlsGP5YLPdcjwsQwACEIiegE2BdGGrAOzCtm+bRSxj/XaNdyw/aRcCEIiEQFdR8V2+wOi7XdvtFXH4/LUZg0+/aQsCEIiEgE2RcWVLULqy7cuur+7gIx5fsdAOBCAQAQEfojOkDUE4pH4IdV12gzHicxkPtiEAgYgIjCFAubVpuzuEws92XNiDAAQiIxCKGKXqh83uECIjm/FhCwIQiJBAiMKUik9Du0MMHIbGSH0IQCBiAjGIVKw+9u0WscXbN07qQQACkROITaxi8bdPt4glNp2ffeKlDgQgkAABnSCwbUYNYdClWwxpJ6S6XWKmLAQgkAiBkEQoFV/adI1UYi3H0SZuykAAAokRKIsAy27PPlLnm9jQIBwIQKCJQOqi5jM+E2ufPozdlokB2yEAgUQJjC06qbRf7R6pxNUljioD1iEAgQwIdBEJyh54qavcRXLnU2bBMgQgkAGB3EVvaPzSRYbaSKV+BsOFECEAgSqBVASMOA48Q/LNpNq3WIcABBIn4FtkaG98oXd1DBIfKoQHAQjoCLgSFOymmyx0x1bXt9gGAQhkQEAnCGzLKwHYON4ZDBVChAAEdARsCEgqNn725Ab1rfvWqO1/vlw9dcPb1QufWK6+ee9q9dMnNij1EonFdJx1/YptEIDACARMg1S2u3Knrs2k922bUl/62NvUpSsOV3PnzBK+xv+yf+bs+eqJPz1dqec2DppHKzWmrvoldiEAAQMBFyJiaKpxswtf9tncMa1+/tSFr/4V/+xUEH/J/+TL69WHLl6oZs0yJ4y6ZCL1rrvoWPVfj/8micThHzaNHZcCEMiJwD5R3evvckhbvlZ8e2lGffv+Neq2956izlt6qJr3Wv1f9YuPnqOuPv9o9eQNnv+a3zGtbrn85N6Jo5pUJJHcfNlJSr24OetE0raPUQ4CEOhIwIowW0w4de739vW5i9Vd71+sFhw623gJqCq+5fXLVh+h/ukza52K8L98YZ2SxFVu19ay2P3hI+uc+t/72FjsOyYf6voU+yAAgR4ETIMtpO26sDr5t2tGPfB7b1aHzO53Kagq4Bef+Ub148cusC7Ef/fpldZ8rPpcrAuDr9y+wrrvnY6Hh2Sh80fXj9gGAQj0JKAbZKFvK4faxtd/f+x89fYTft36X/RyWWjLdUutCfHe21e0vmQlSWDtqa9T7zv3KHXN+mPUlecdNVlvmyDFd2mvDb+UypT7DssQgEBPAqmIgoRfF8vX71rl/C96EW+1a9i9ou9vOU8d1HCjvLgh/o8PrFFqj+Fexp7NSvbLjXMpX5x16H6lve997tyskkjP4UI1CECgIFAnuCnt23HrO2oFtCqqIrjHzJutTj5yjpo/96BOdTecPk+pHdP9xHjb1KTdqj/l9avWLVCvPH1hJ/tSXs5QynaqyxKvej6PR32L/s8vBCDQk0BKCaIuln+4Z1XjX+AipuuXzVN/ff0yJY/LHvAC3vZp9Y27V6k/3nx847sXYuvytUd2EvjCf7kEVRX2Yl3OErbdsryX3cK+1K87u5GnzIqyKf/2HDJUgwAEhEDK4lCOTd7Gfv0h+sdyC2GeXn6Y+tcvdnga6W83qQevab4Jf/dVizuJsVxCKnyq/oroTy5XWbjhLE+O1SWR7zz4zk5+l3nHsowKQAACAwjEMtCH+rnutDfUivLTN57eWywlOa1cNNdoX5JAl/sKcumrmjiK9T23nd3bTx1DefKqsF39nVyCs5CodO2GsG3AsKEqBCAQwiD24cPWm84wiqQ8ofTdh84ZLso7N6mZsw4ztrP85NceeDlMI85yBlQV8mL9hktPHO6nps2Pv/sEY5s/ePhdTtr0cdyb2kABIACBngSaBlcy+3dvVse90fyCoK3LQRNeOzdN3mAvBL/6K5MbNnG96bdO0oq5vBWvtve8Ia9JGvv58cJG4wMC4s9+ZZtsRbK/57ChGgQgIARSFAVdTM/efKZWkAXBX/7BW6yL4y+3XmicAmVyFtIgsMcfdrDW33s/sMS6r2Ve8kJlNeHJ+omHH+y03bIPPpdRAQhAoCcBnwN17LbkiSqdMMpLhMb3JhpEvikmmUpd16Zsq7skJJM2mur9YutFToVcEp+pbZkmvinmmPb3HDZUgwAEhEBMg32Ir//7zJRRFJ2+cb1n8+S9EZ0gy0SNpph2f+osrb9tzlxMNo3b5f2UbVP7vadiehBA/DLaGZhsfdtFASAAgQEEfA/YMduTdx10Ii6TJro6+yjifejat2jbXr3kN4xi/NnfP1VbR945Kex2/t01M3lv5Y7fWaRkri65JKVjIveJTPeK5PJW53YDTCwDhg1VIQABIZCCELSN4UbD00XXz5zgXBD/+/ELtEItb7arPZdo25ep1XXi3mduLXls+NoNx7Z62VHXZnnbH208Tutv2+MQQjlGPwQgYIFACIPZlw/yYmBZCIvlNk9D1fko9wtkShS5HHXFOa9OWCj3VOS/XAaS9yc+Mn2cUbz/wzBjryS2wsfy7+Qrgi3/opeX/2RCxXL9octyY7+ORwz7LAwdTEAgbwIxDHSbPppm25Vva3RtR25w33f1EnXawl8bLM4yPbuufdMjvI9+9K3a8mUbcr9HktnQZKGrL2+rl9uKbTnvUU/0ELBEILaBP9Rf0yOxrzzd/lOu8qElmVlXJ6x9t336Kv0jufJRK53NpqlQJCEd8bpuEz3q2qnbNvRYjFHf0rDBDAQgIATGGMRjtikz6OpEsdVjqdumJhMm6uoP3SaXmHRcvvSxt2n9lWnYdeVlm5ydDPWnTX05AzP5EOJ2RjwEIGCZQIgD3aVP8virThzr3sUQf16+f23vz9vq2qtuM72c97U7V2r9laendJxMZyzV9mys7/yLeB7ltTxsMAcBCAgBnQilvE2EVyeeX73D/NW9hz98mraOzk7fbXPnzNImBLlcprN5yoI5B5T//AeXasvq6tvYJvd/YugrjHQIQMARgRgEwKaPH7p4oVZkTTelP3nFm7TlbQhw2cbkUV7dU1Xbp7XtV29i182gW27H5rJMuGjz2Ni25WjIYBYCECgI2B60odu753eXaAX51vccOEHgnVcu0pa1KcJlWyZ2cnZSLlcsq2enJgIu929MZYqyLn7r7sOYYvG1vejf/EIAAg4J+BrQobTzNx/Xz0k1+V556QxA3rNwIbp1NtVz+pl1TY8JF/dtTJfl6tqysc/VVPJD+orDoYJpCECgSmDIYI2x7rfvX6NNDOWnoESY677KZ0N8dTZMXz6cOXu+1md5+bHr99x17fbd9tlr7c9c3LdPVfs16xCAgAcCfQdsrPVM04kcM2/2q9fzd29Wbz7mEK1g9xXatvVMj8X+2W+fqPVHto/lq8Qkn78NoR94GCY0AQEI6AiEIABefdg1oxVjEUS1c5MyTV7YNgkMKad2zWgF2XTZzTTR4RAfutQ1zd/l63jq+jPbIAABjwR8DfaQ2jEJ77fuW6Pkc7ZdRNRmWROjV542f5fDZvtdbM2fe5A22ZlisLXd49CgKQhAoImArYEdkx3Td8plwsMuImqz7OTztKWb+FWepjm8bPrQxZbM6lv10eV6Uz9mPwQgMBIBlwM/RNtjXqYyibTpzfKCn3xq11R3jO0/fcL9FwlHGg40CwEIdCFQiFQuvzLz7hiiW9dm4xf+tk2Nenmt7Ls8Vuyqr3Tpt5SFAAQCIOBKDEK2a3q3oiyUvpaNb6FXLmnJt0Z8+VTXzvc+d561BBJA98cFCEBgKIGQxd6Fb6ZZbuuE09W+6kuMxnh3TDud0LFNfOuXzbOWPIo4h/Zd6kMAAiMTKAZzNr87Nzn/XkYbQZYy6nn9G+i6Y/H396we7SxkMv/Wi5utJ5BynCMPA5qHAAT6ECgP4lyWn735zNHEuEgufzi1sLMgm76TXth09fvyA/5eHOzTh6kDAQiMSCCXxFGO0/SNdFciXLY75F0K04exyvZtLsslvzI3X8sjDgeahgAEuhDwJQohtfM/z0yNMpOtiPuPHj2/vyjvucTKt9jbJBn5HsrYx6xLP6YsBCAwEoGxhWKM9r9x9yrvl7Lk8pmNWC9bfYQz3+Weh3wR0YafNmyMNCRoFgIQ6ELAxmCPzYbP6dulLZt8XvjEO6y/IyKf/u1yc99mPE22uvRlykIAAp4JNA3gVPd//a5VSt7JaHNZp08ZsS1tOOG35xL1kenjBvt//GEHu/Ox8l7LEA6ehwTNQQACXQgMGdwx15V7IouPnmM9iYhNse2DzWeuOVXJN9PbJjmZQHJ6+Xz1z1vsvSDoI84u/ZmyEICAZwI+RCDUNuQyk43PxIqNx/9kmZfEoWP53YfOUXe9f7F637lHKZlva91pb1By30TOViRGX0lN55uNbZ6HBM1BAAJdCNgY5DHbkG9x9DkjkQ892b7XETNHl7536c+UhQAEPBNwOfijsb1rRm296Qx1xTlHKZlafcGhs9XrD5k1+S9fM5S5teSvfCkz9oeWomHKPRHPI5nmIDASgRxFiZj1X0gMkctIw4JmIQCBtgRCFA58ikfkXR+rtv2YchCAwEgEXIsA9kkIffvASEOCZiEAgS4E+g5w6pWSw7Yp9Z0H36l+sfWi0Z7QSvF4dOnHlIUABEYikKL4+IpJnuySaUKK9zRuufxkkoilG+ojDQeahQAE+hDwJbqptPOzJzdo3xb/yu0rSCIkkT5DkDoQiJ9AKgLvOg7TN0hufPcJdhLI8xuVTA75b48MmOnXkpC7ZmmyH/9oIgIIZEjANKDZ/qt7H/KeSHHpqvzb+rO2NeK+9/YV+02qKG+cq12/ajuX45Dh0CNkCKRDIBeh6hPnV+9YoU0gG04f9q1xuTQmc1qVk5Isb7luqZ0zm5rE1YeDyzrpjCQigUDGBFyKRKy2f/Dwuw4QeRH6IV8nFBYyz1U1ecj65WuPzC6BCI+Mhx2hQyA9ArEKvnW/X9ysFXoR+//8qwt6if3nP7jUaPP6GUv3ViI6AyGBpKcfRASBfQSsi3Jk4iZzaenOFm577ymdE0jd1xTl+yM/+fL6zjZTOD77OhsLEIBAugRSEKuuMXzyijdpE4hMzqie39ha8L957+r93iepJiX5LkhX31Ipn+6IITIIQEBLIBXxaorjx49doE0g++5ZvNT85NTTN+7/MmI1eaxcNDfrWYG1HYyNEIBAXgSaxDjW/aab3pIILl1xuHGKE7lPIo/nVhNGeV1uyP/8qQuzPfuQPpHXKCFaCECgM4FYk4f4/f0t59UmAXkk9+rzj1aPfvSt6pmbzlD3Xb1ErV82r7aOJBG57/Hy/WtJHp17ExUgAIHsCMScRGQOrPKZw9BlSR57bjs76+TB2Ud2EkDAEOhHIObkMfF9zyVKXiAcmjikvpyxfO3OldknDxJIv7FELQhkRSD65FE8erxjenASke+v//CRdSSP/2ea1UAgWAhAoBuBZJJHkUR2b1amR3vrzk7krOPeDyxRaucmkgfJo9sgojQEciSQXPIoksjeGfWjR89XV61boJ3uvZxIFhw6W9155SL1y615P2ml6ws5jglihgAEWhLQiUZy27ZPq92fOmuSJD48tVBdd9Gx6tb3nDR5IotLVeZ3ZFp2IYpBAAI5EkguUZTOPojNnBjasslxTBAzBCDQgkBbEaHccCGOkWGLLkQRCEAgRwIxCho++01kOY4LYoYABBoIIMR+hThG3g1diN0QgECOBGIUM3z2m/ByHBfEDAEItCCAGPsV4xh5t+hGFIEABHIjEKOY4bPfhJfbmCBeCECgBQGE2K8Qx8i7RTeiCAQgkBuBGMUMn/0mvNzGBPFCAAItCSDGfsU4Jt4tuxDFIACBHAnEJGb46jfR5TgeiBkCEGhJAEH2K8ix8G7ZfSgGAQjkTCAWQcvNT+mTY8Sc81ggdghAoAOBMQSKNtud8VQPo2tu1fZYhwAEIGAk4FqQsN8uUdRxMh48C2cndbbZBwEIQKCWQJ1wsW+4+NtiWHsQ2QkBCEDANwFb4oYd94nGd9+gPQhAAAK1BBB+98Jvk3HtwWQnBCAAAV8EbAobtvwkIl99g3YgAAEI1BJA9P2Ivm3OtQeVnRCAAARcE7Atatjzl4xc9w3sQwACEDASQOz9ib0r1saDyw4IQAACLgm4EjXs+ktMLvsHtiEAAQhoCeQg8hJ4LnFqDzIbIQABCLggkIuw5hKniz6CTQhAAAJaAqkLaxF06nFKfEWs/EIAAhBwTiAnUc0hVpKI8yFDAxCAQEEgdVEt4pTf1GMt4ivHzDIEIAABJwQKwUn5twwu5TjLsZVjZhkCEICAEwJl0UlxuQotxRhNMVVjZx0CEICAVQIm8UllexVWKnG1iaMaO+sQgAAErBJoI0SxltGBijWWPn7r4mcbBCAAASsE+ohSTHV0kGLy34avOgZsgwAEIDCYgA2BCtWGCU6o/rryy8SB7RCAAAQGEXAlWiHYrQMTgn++fKjjwD4IQAACvQn4EjHf7TQB8e3PmO01sWA/BCAAgV4ExhQ2l203wXDZdmi2m1iwHwIQgEAvAqGJnQ1/2oCw0U4sNtrwoAwEIACBTgRiEcAufnYB0MVu7GW7cKEsBCAAgUYCsYti1f/GgCsFqvVTXq+EzioEIACBYQRSE8yuNFKLvy6ermwoDwEIQKCRQJ3oxLSvMVBDgZhiHOKrIXw2QwACEOhPYIgohVK3f/RM7T6EHXUhAIHMCYSSBPr6YePw9W07pno2OGEDAhCAwH4EYhLBqq/7BTJgpWo3xfUBeKgKAQhAQE8gVrHUR9N/a6wc2vrdnww1IQABCNQQaCtCoZSrCaX3rlBic+FHbyhUhAAEINBEwIVoubLZFMuQ/a58HtvuECbUhQAEINBIYGyRa2q/MQALBZp8iHW/BTSYgAAEIGAmELI4mr22vydkDn19s08JixCAAAQqBPoKlMt6FRe9rLqMx7dtL8BoBAIQgIAQ8C1wpvbGPBomn2LcPiZH2oYABDIkMKZQhoJ7TAY22w6FJ35AAAIZEbApYm1thYa3rd+hlguNJ/5AAAKZEfAhjiEj9RG/izZCZopvEIBAZgRsi1xM+GzH7sNeTHzxFQIQyITAEPGLGdGQuH3XjZkzvkMAAhkSKItkquGXYwx1OVX2xAUBCEAgegKhJg7xK3q4BAABCEAgBwKhJZIcmBMjBCAAgWQIhJBEkoFJIBCAAARyJDBGIsmRMzFDAAIQSJaAj0SSLDwCgwAEIACBVwnYTCYwhQAEIACBzAm0SSqZIyJ8CEAAAhCAAAQgAAEIQAACEIAABCAAAQhAAAIQgAAEIAABCEAAAhCAAAQgAIGUCfwfc3awItH6POcAAAAASUVORK5CYII="
              />
            </defs>
          </svg>
        </div>
        <div className="flex justify-center -mt-[7.5rem]  items-center flex-col gap-5 ">
          <img
            className=" w-30 h-30 "
            src="../public/images/group-1261154288-main-logo.png"
            alt="main-logo"
          />
          <h2 className=" text-xl text-[#041424] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)] font-bold leading-[130%] tracking-wide">
            Login to your account
          </h2>
          <form className="flex flex-col gap-3">
            <div class="relative">
              <input
                type="text"
                class=" w-96 h-14 pl-10 pr-4 py-2 border rounded-lg bg-[#F8FAFA]"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div class="absolute inset-y-0 left-0 pl-3 rounded-lg border-l border-t border-b bg-[#F8FAFA] flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                    stroke="#0A3055"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                    stroke="#0A3055"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div class="relative">
              <input
                type="text"
                class="w-96 h-14 pl-10 pr-4 py-2 border bg-[#F8FAFA] rounded-lg"
                placeholder="Enter your email"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div class="absolute inset-y-0 left-0 pl-3  bg-[#F8FAFA] rounded-lg border-l border-t border-b flex items-center pointer-events-none">
                <img src="../public/images/key.svg" alt="password icon" />
              </div>
              <div class="absolute inset-y-0 right-0 pr-3  bg-[#F8FAFA] flex items-center pointer-events-none rounded-lg border-r border-t border-b">
                <img
                  src="../public/images/vuesax-linear-eye-slash.svg"
                  alt="password icon"
                />
              </div>
            </div>
            <p className="text-blue-900 text-sm  opacity-[0.7] font-normal leading-[142.857%] tracking-tighter ">
              Forgot Password
            </p>
            <button
              className="btn w-full mt-5 h-12 border-none bg-[#FF6666] text-white "
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className=" w-full h-screen">
        <img
          src="../public/images/untitled-12012-backround-login-img.png"
          className="w-full h-full object-fit"
          alt="bg-img"
        />
      </div>
    </main>
  );
};

export default Login;
