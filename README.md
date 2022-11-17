# [🐰 Rabbit in the Hole Challenge](https://rabbit-hole-challenge.vercel.app)
This website is designed to show solutions and possibilities for the Rabbit in the Hole Challenge.

## 📜 What is the challenge?
There are 100 holes 🕳️ in a line, and there's a rabbit 🐰 hiding in one of the holes

You can only look in one hole at a time, and every time you look in a hole, the rabbit jumps to an adjacent hole. **Find the rabbit!**

## 🎉 How to contribute?
> Fork and clone this repo.
```cmd
git clone https://github.com/<Your fork>/rabbit-hole-challenge.git
```

> Install its dependencies using yarn:
```cmd
yarn install
```

> Run the project
```cmd
yarn dev
```

After that, the website will be served in your browser, in the url specified in the terminal.
Now you can do whatever changes do you want, commit and push them, and then send a [Pull request](https://github.com/Nick-Gabe/rabbit-hole-challenge/compare) to this repository. It will be revised, and if its everything alright it will be approved and merged :).

## 🗂️ Folder structure
```txt
src
─┬─
 ├── assets (images, videos, svgs, assets in general)
 │
 ├─┬ components
 │ ├── Emojis (bunny, player, holes...)
 │ ├── Interactive (config interactibles like inputs, buttons, menus)
 │ └── other components
 │
 ├── contexts (react contexts)
 │
 ├─┬ gameplay (related to game logic)
 │ ├── algorithms (algorithms used for the game AIs, one per file)
 │ └── loop.js (executes the gameplay loop, like changing positions and states)
 │
 └── utils (reusable functions)
```

## 🏆 Contributors
<table>
  <tbody>
    <tr>
      <td align="center">
        <a href="https://github.com/Nick-Gabe">
          <img src="https://github.com/Nick-Gabe.png" width="100px;" alt="Nick Gabe's github avatar"/>
            <br />
          <sub><b>Nick Gabe</b></sub>
        </a>
        <br />
        <a href="https://twitter.com/MyNickIsNick_" title="Twitter">🐦</a>
        <a href="https://github.com/Nick-Gabe_" title="GitHub">🐱‍💻</a>
        <a href="https://www.linkedin.com/in/nicolas-gabriel/" title="Linkedin">🤵</a>
      </td>
      <td align="center">
        <a href="https://twitter.com/JeffQuesado">
          <img src="https://github.com/jeffque.png" width="100px;" alt="Jeff Quesado's github avatar"/>
            <br />
          <sub><b>Jeff Quesado</b></sub>
        </a>
        <br />
        <a href="https://twitter.com/JeffQuesado" title="Twitter">🐦</a>
        <a href="https://github.com/jeffque" title="GitHub">🐱‍💻</a>
        <a href="https://computaria.gitlab.io/blog/" title="Website">🌐</a>
      </td>
    </tr>
  </tbody>
</table>
