# InnoMenu

Короче говоря, это не совсем React. Это Next JS (это требование Дэниеля было),
но он базируется на Реакте и очень на него похож.

## Как запустить

Ну, тут всё решает вот это:
```bash
npm run dev
# и тыкаешь на http://localhost:3000
```
Если что, можно глянуть скрипты в *package.json*

## Структура

Здесь это довольно важная фигня. В чём идея: 
> Здесь путь к нужной странице задаётся структурой папок

Таким образом, то, что хранится в папке *app* в файле
`page.tsx`, будет отображено по `/`, а то, что в папке
*app/about* в файле ***page.tsx*** - по ссылке `/about`

Я уже подготовил все нужные нам директории: *about, auth, dish, my* и собственно основную страницу.

Чтобы не засорять ***page.tsx***, я создал в каждой директории папку *components*, в которой надо будет 
создавать новые компоненты и запихивать их в друг друга.

В components уже создан **...Main.tsx**, который используется в page.tsx.

## Как и где делать контент?

Идея очень простая: заходишь в нужную директорию, в папке components создаёшь файл с расширением *.tsx*
(с любым названием, но желательно более сложным и нестандартном, чтобы не было путаницы 
с системными файлами), например, SomeElement.tsx. Прежде чем идти дальше, нужно скачать plugin: 
**Modern React Snippets**. Теперь в файле Example.tsx нажимаешь комбинацию `rfce` и у тебя генерится
стандартный шаблон. Теперь заполняешь этот файл контентом: можно использовать стандартные\
div / css / className, но есть более удобный способ: необходимо написать
```
export const CustomElement = styled("div")`  
   color = red;
`
```

Обрати внимание на кавычки, которые здесь используются.\
К сожалению, эту фигню не стоит написать прямо в SomeElement.tsx, потому что тогда будет ошибка. 
Для этого я в каждой директории создал папку **custom**, где нужно создавать файлы с расширением `.ts` и в 
самое начало помещать фразу\
`"use client"`

В скобках может быть любой элемент, который ты хочешь кастомизировать. Потом в SomeElement.tsx ты используешь
его как обычный *div*:

```
<CustomElement>
    Hello world!
</SomeElement>
```


Ещё один важный аспект: в `return()` может быть только один HTML элемент, так что если у тебя появляются
параллельные конструкции, то их просто нужно обернуть ещё одним `<div> </div>` либо `<> </>`

Попрежнему можно использовать css и классы (здесь параметр называется `className`)

Когда ты доделала отдельный элемент, его нужно просто добавить на более верхний уровень. Например,
в **MyMain.tsx** ты пишешь следующее: 
```
return(
    <div>
        ...что-то
        <SomeElement/>
    </div>
)
```

Это и называется разбиение по компонентам. Так удобнее сосредотачиваться на мелких задачах и, если
будет необходимость, заменять компоненты целиком.

Если тебе нужно писать TypeScript код, то просто пиши до ретёрна.

### Интересное примечание

В Реакте (а точнее в .tsx) есть одна не очень приятная вещь. Это как раз касается переменных.
Следующая конструкция:

```
function MyMain() {
    const word: string = 'world';
    return (
        <div>
            <SomeElement/>
        </div>
    )
}
```

Как должен выглядеть *SomeElement.tsx*, если мы хотим следующее: `<div>Hello + {word}</div>` ? В общем,
принимаемую переменную надо написать **трижды**:

```
const SomeElement: ({word} : {word: string}) => JSX.Element = ({ word }) => {
    return (
        <div>Hello {word}</div>
    )
}
```

Помимо этого необходимо раширить импорт (в `'react'` добавить): `import React, {JSX} from 'react'`

Теперь **MyMain.tsx** будет выглядеть следующим образом:

```
function MyMain() {
    const word: string = "world"
    return (
        <div>
            <SomeElement word={word}/>
        </div>
    )
}
```


Вот шаблон для подобного рода функции: ```const SomeElement: ({ } : { }) => JSX.Element = ({ }) => {```

## Как будем работать с GitHub?

Вообще, по-хорошему надо создавть ветки и вконце их сливать (мы так делаем на свп). Если будет не лень,
то можно делать так, но я сам не очень хорошо шарю за ветки. Так что, учитывая, что нас всего двое,
то можно и одной веткой `main` обойтись.

Если что, мой коллега по проекту делал туториал по гиту:\
https://gitlab.pg.innopolis.university/a.savchenko/how-to-git

Если будем одной веткой пользоваться, то не забудь каждый раз перед тем, как начать что-то делать, написать:\
`git pull origin main`

Насчёт этого напиши в телеге и скажи, как тебе будет удобней)

### P.S.

В папке `_home_` хранятся компоненты для домашней страницы, в `_main_` - компоненты для Footer и Header.

Файл **layout.tsx** нужен для конфигурации всех имеющихся страниц, но там уже по идее ничего менять 
не надо будет.

Если хочешь где-то хранить картинки, то создай папку `images` в той же директории.

Montserrat я уже подключил :)

Если будут какие-то вопросы, то пиши)