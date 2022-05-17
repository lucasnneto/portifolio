<template>
  <div class="mt-4 flex flex-col">
    <h2
      class="transition ease-in-out text-5xl mobile:text-3xl mobile:mt-7 font-medium mb-5 text-center"
    >
      <span class="text-primary">L</span>UCAS
      <span class="text-primary">N</span>ETO
      <span class="text-primary">O</span>LIVEIRA
    </h2>
    <p class="text-center font-medium text-2xl mobile:hidden mb-2">
      DESENVOLVEDOR FULL-STACK
    </p>
    <p class="text-center text-sm mobile:hidden mb-2">
      COM DESTAQUE EM FRONT-END
    </p>
    <div class="flex my-6 mobile:my-4 justify-center mobile:justify-between">
      <a
        href="https://github.com/lucasnneto"
        target="_blank"
        class="flex items-center mobile:px-4 mobile:text-sm px-7 py-2 bg-primary text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
      >
        <icon class="mr-2 mobile:w-4 mobile:mr-1" name="github" color="white" />
        GITHUB
      </a>
      <a
        href="https://www.linkedin.com/in/lucasnneto/"
        target="_blank"
        class="mx-7 mobile:mx-2 mobile:px-3 mobile:text-sm flex items-center px-6 py-2 bg-primary text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
      >
        <icon
          class="mr-2 mobile:w-4 mobile:mr-1"
          name="linkdin"
          color="white"
        />
        linkedin
      </a>
      <a
        href="/files/curriculo.pdf"
        download
        class="flex items-center mobile:px-2 mobile:text-sm px-5 py-2 bg-primary text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-secondary hover:shadow-lg focus:bg-secondary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary active:shadow-lg transition duration-150 ease-in-out"
      >
        <icon
          class="mr-2 mobile:w-4 mobile:mr-1"
          name="curriculo"
          color="white"
        />
        currículo
      </a>
    </div>
    <div class="grid grid-cols-2 mobile:grid-cols-1 gap-3 overflow-auto">
      <div>
        <div class="bg-primary py-2 pl-4 flex items-center">
          <p class="text-xl text-white">Contato</p>
        </div>
        <p class="uppercase mt-2 mobile:text-sm">
          Email: lucas-neto@hotmail.com <br />telefone: (38) 9 9850-5850<br />
          linkedin: IN/lucasnneto/ <br />github: /lucasnneto<br />
          CIDADE: UBERLÂNDIA - MG
        </p>
      </div>
      <div class="mobile:hidden">
        <div class="bg-primary py-2 pl-4 flex items-center">
          <p class="text-xl text-white">Cursos e Certificações</p>
        </div>
        <ul class="uppercase mt-2 list-disc ml-5">
          <li>Vuejs 2 - 2021</li>
          <li>vuejs 3 - 2021</li>
          <li>flutter - 2021</li>
          <li>UI design com referências visuais - 2021</li>
          <li>Android Básico - 2020</li>
        </ul>
      </div>
      <div>
        <div class="bg-primary py-2 pl-4 flex items-center">
          <p class="text-xl text-white">Sobre mim</p>
        </div>
        <p class="uppercase mt-2 text-justify mobile:text-sm">
          Sou desenvolvedor front-end com ênfase em projetos usando Vue.JS. Sou
          graduado em Engenharia da Computação pelo IFTM.<br />
          Sempre em busca de novos conhecimentos e estudos para desenvolvimento.
          Com conhecimentos em diversas linguagens de programação e frameworks
          como Java, Python, C, C++, Vue.js, React.js, React Native, Flutter,
          Node.js, banco de dados relacional e não relacional dentre outras.
        </p>
      </div>
      <div class="mobile:hidden">
        <div class="bg-primary py-2 pl-4 flex items-center">
          <p class="text-xl text-white">Qualificações</p>
        </div>
        <ul class="uppercase mt-2 list-disc ml-5">
          <li>Desenvolvimento front-end completo;</li>
          <li>ui/ux design - básico;1</li>
          <li>Pacote Office - intermediário (Excel, Word, Powerpoint);</li>
          <li>Proatividade e adaptabilidade;</li>
        </ul>
      </div>
    </div>
  </div>
</template>
