<template>
  <div>
    <div class="salon-wrap">
      <article class="bg-white py-6 md:py-12">
        <div class="container max-w-full mx-auto lg:px-56 md:px-16 px-4">
          <div class="flex flex-wrap -mx-4">
            <div class="w-3/5 md:w-2/12 px-4 mx-auto">
              <img src="~/assets/images/staff_01.jpg" alt="" class="rounded" />
            </div>
            <div
              class="w-full md:w-10/12 flex flex-col px-4 font-bold mt-6 md:mt-0"
            >
              <span class="block text-base text-beige-900">副店長</span>
              <h3 class="text-xl my-3">樋口 希世　Kiyo Higuchi</h3>
              <p class="text-sm font-normal">
                宮崎出身 O型<br />
                子供の頃から美容室という場所が大好きで、そんな大好きな場所で日々過ごせる事に幸せを感じています☆
              </p>
              <p class="text-sm font-normal mt-2">
                ※指名料金：¥1,080（税込）
              </p>
              <div class="flex justify-between items-center mt-6 md:mt-auto">
                <div class="block">
                  <h4 class="block md:hidden text-black font-sm">各種SNS</h4>
                  <ul class="flex items-center">
                    <li class="mr-4">
                      <a href="#">
                        <img src="~/assets/images/fb.svg" alt="" />
                      </a>
                    </li>
                    <li class="mr-3">
                      <a href="#">
                        <img src="~/assets/images/line.svg" alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src="~/assets/images/ig.svg" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
                <p class="text-sm text-right mt-auto hidden md:block">
                  <a href="#" class="block py-2 px-6 btn-primary rounded" target="_blank"
                    >指名して予約</a
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
        <!-- //container -->
      </article>

      <article class="salon-contents">
        <div
          class="container max-w-full mx-auto lg:px-56 md:px-16 px-0 mt-2 md:mt-12"
        >
          <section class="px-4 md:px-8 py-6 bg-white rounded-lg">
            <h3 class="text-lg font-bold mb-4 md:mb-6">スケジュール</h3>
            <table
              class="text-left w-full border-separate overflow-hidden rounded border border-grey-light hidden md:block"
            >
              <!--Border collapse doesn't work on this site yet but it's available in newer tailwind versions -->
              <thead>
                <tr>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="p-4 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                  >
                    1/9<span class="block">（土）</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="hover:bg-grey-lighter">
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="p-4 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
            <!-- //PC -->
            <table
              class="table w-full border-separate overflow-hidden table-fixed rounded border border-grey-light block md:hidden schedule-table"
            >
              <tbody>
                <tr class="hover:bg-grey-lighter">
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-r border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                  <th
                    class="py-1 px-1 bg-grey-lightest text-center font-bold uppercase text-sm text-grey-dark border-b border-t border-grey-light"
                  >
                    1/8<span class="block">（金）</span>
                  </th>
                </tr>
                <tr class="hover:bg-grey-lighter">
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-r border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                  <td
                    class="py-1 px-1 text-center border-grey-light text-grey-dark"
                  >
                    <svg
                      class="mx-auto"
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="10.4023"
                        cy="10.4078"
                        r="8.5"
                        stroke="#D6B798"
                        stroke-width="3"
                      />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
          <!-- //section-content -->

          <section class="px-0 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
            <h3 class="text-lg font-bold mb-4 md:mb-6 px-4 md:px-0">スタイル</h3>
            <ul
              class="flex flex-wrap md:flex-nowrap relative md:overflow-scroll"
            >
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer active"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_01.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_02.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_03.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_04.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_05.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_06.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_07.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_08.jpg" alt="" />
              </li>
              <li class="relative w-4/12 style-item">
                <span
                  class="absolute inline-block rounded p-1 top-3 right-3 bookmark cursor-pointer"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 3H7C5.9 3 5.01 3.9 5.01 5L5 21L12 18L19 21V5C19 3.9 18.1 3 17 3ZM17 18L12 15.82L7 18V5H17V18Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <img src="~/assets/images/thumb_09.jpg" alt="" />
              </li>
            </ul>
            <p class="text-center mt-6">
              <nuxt-link
                to="style"
                class="font-bold text-beige-900"
                append
              >
                すべてのスタイルを見る
              </nuxt-link>
            </p>
          </section>
          <!-- //section-contents -->

          <section class="px-4 md:px-8 py-6 bg-white rounded-lg mt-2 md:mt-8">
            <h3 class="text-lg font-bold mb-4 md:mb-6">メニュー</h3>
            <ul class="w-full md:w-10/12 flex flex-wrap relative mx-auto">
              <li class="w-full px-0 md:px-4">
                <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                  <div class="overflow-hidden rounded-lg thumb-card__thumb">
                    <img
                      src="~/assets/images/thumb_01.jpg"
                      class="w-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div
                    class="relative flex flex-col font-bold thumb-card__col"
                  >
                    <span class="block text-xs mb-1 text-beige-900"
                      >カット トリートメント</span
                    >
                    <h3 class="text-sm mb-1">
                      この仕上がりに驚いてください
                      ■水素トリートメント贅沢コース■
                    </h3>
                    <p class="text-xs font-normal hidden md:block">
                      カット＋カラー＋水素トリートメント<br />
                      ＊シャンプーブロー込<br />
                      ＊ロング料金なし
                    </p>
                    <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                      ¥24,200（税込）
                    </p>
                    <p class="absolute bottom-0 right-0 text-xs">
                      <a href="#" class="block py-2 px-6 btn-primary rounded">予約</a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="w-full px-0 md:px-4 mt-6">
                <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                  <div class="overflow-hidden rounded-lg thumb-card__thumb">
                    <img
                      src="~/assets/images/thumb_02.jpg"
                      class="w-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div
                    class="relative flex flex-col font-bold thumb-card__col"
                  >
                    <span class="block text-xs mb-1 text-beige-900"
                      >カット トリートメント</span
                    >
                    <h3 class="text-sm mb-1">
                      この仕上がりに驚いてください
                      ■水素トリートメント贅沢コース■
                    </h3>
                    <p class="text-xs font-normal hidden md:block">
                      カット＋カラー＋水素トリートメント<br />
                      ＊シャンプーブロー込<br />
                      ＊ロング料金なし
                    </p>
                    <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                      ¥24,200（税込）
                    </p>
                    <p class="absolute bottom-0 right-0 text-xs">
                      <a href="#" class="block py-2 px-6 btn-primary rounded">予約</a>
                    </p>
                  </div>
                </div>
              </li>
              <li class="w-full px-0 md:px-4 mt-6">
                <div class="flex flex-wrap rounded shadow p-2 thumb-card">
                  <div class="overflow-hidden rounded-lg thumb-card__thumb">
                    <img
                      src="~/assets/images/thumb_03.jpg"
                      class="w-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div
                    class="relative flex flex-col font-bold thumb-card__col"
                  >
                    <span class="block text-xs mb-1 text-beige-900"
                      >カット トリートメント</span
                    >
                    <h3 class="text-sm mb-1">
                      この仕上がりに驚いてください
                      ■水素トリートメント贅沢コース■
                    </h3>
                    <p class="text-xs font-normal hidden md:block">
                      カット＋カラー＋水素トリートメント<br />
                      ＊シャンプーブロー込<br />
                      ＊ロング料金なし
                    </p>
                    <p class="text-sm mt-auto mb-0 md:mt-2 md:mb-1">
                      ¥24,200（税込）
                    </p>
                    <p class="absolute bottom-0 right-0 text-xs">
                      <a href="#" class="block py-2 px-6 btn-primary rounded">予約</a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
            <p class="text-center mt-6">
              <a href="#" class="font-bold text-beige-900"
                >すべてのメニューを見る</a
              >
            </p>
          </section>
          <!-- //section-contents -->

          <Relation />

          <div
            class="fixed bottom-0 right-0 left-0 pt-8 pb-6 px-4 salon-fixed md:hidden"
          >
            <p class="text-center"><a href="#" class="block py-2 btn-primary rounded">指名して予約</a></p>
          </div>
          <!-- //Fixed -->
        </div>
      </article>
      <!-- //salon-block -->
    </div>
  </div>
</template>

<script>
import Relation from "~/components/pages/Relation/Relation.vue";

export default {
  layout: 'back',
  head() {
    return {
      title: 'スタッフ詳細'
    }
  },
  components: {
    Relation
  },
  data(){
    return {
      header: {
        title: 'スタッフ詳細'
      }
    }
  },
  mounted() {
    this.updateHeader()
  },
  methods: {
    updateHeader() {
      this.$nuxt.$emit('updateHeader', this.header.title)
    }
  }
}
</script>
