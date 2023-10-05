import {Tab, initTE} from 'tw-elements';

export default function () {
  initTE({Tab});
  return (
    <div>
      <ul
        class="mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0"
        role="tablist"
        data-te-nav-ref>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-1"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-1"
            data-te-nav-active
            role="tab"
            aria-controls="tabs-1"
            aria-selected="true">
            MODULO I
          </a>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-2"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-2"
            role="tab"
            aria-controls="tabs-2"
            aria-selected="false">
            MODULO II
          </a>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-3"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent data-[te-nav-active]:border-primary data-[te-nav-active]:text-primary dark:text-neutral-400 dark:hover:bg-transparent dark:data-[te-nav-active]:border-primary-400 dark:data-[te-nav-active]:text-primary-400"
            data-te-toggle="pill"
            data-te-target="#tabs-3"
            role="tab"
            aria-controls="tabs-3"
            aria-selected="false">
            MODULO III
          </a>
        </li>

        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-4"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
            data-te-toggle="pill"
            data-te-target="#tabs-4"
            role="tab"
            aria-controls="tabs-4"
            aria-selected="false">
            MODULO IV
          </a>
        </li>
        <li role="presentation" class="flex-auto text-center">
          <a
            href="#tabs-5"
            class="my-2 block border-x-0 border-b-2 border-t-0 border-transparent bg-transparent px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-400 hover:isolate hover:border-transparent hover:bg-neutral-100 focus:isolate focus:border-transparent dark:text-neutral-600"
            data-te-toggle="pill"
            data-te-target="#tabs-5"
            role="tab"
            aria-controls="tabs-5"
            aria-selected="false">
            MODULO IV
          </a>
        </li>
      </ul>

      <div class="mb-6">
        <div
          class="hidden opacity-100 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-1"
          role="tabpanel"
          aria-labelledby="tabs-home-tab01"
          data-te-tab-active>
          Tab 1 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-2"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01">
          Tab 2 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-3"
          role="tabpanel"
          aria-labelledby="tabs-profile-tab01">
          Tab 3 content
        </div>
        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-4"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab01">
          Tab 4 content
        </div>

        <div
          class="hidden opacity-0 transition-opacity duration-150 ease-linear data-[te-tab-active]:block"
          id="tabs-5"
          role="tabpanel"
          aria-labelledby="tabs-contact-tab01">
          Tab 5 content
        </div>
      </div>
    </div>
  );
}
