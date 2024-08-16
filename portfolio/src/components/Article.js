import './Article.css'

function Article() {
    return(
        <div className='content'>
            <div className="section" id="Introduction">
                <div className='article-header'>Introduction</div>
                <div className='article-main'>
                    <p>
                    JavaScript is a cross-platform, object-oriented scripting language.
                    It is a small and lightweight language. Inside a host environment
                    (for example, a web browser), JavaScript can be connected to the
                    objects of its environment to provide programmatic control over
                    them.
                    </p>

                    <p>
                    JavaScript contains a standard library of objects, such as Array,
                    Date, and Math, and a core set of language elements such as
                    operators, control structures, and statements. Core JavaScript can
                    be extended for a variety of purposes by supplementing it with
                    additional objects; for example:
                    </p>
                    <ul>
                        <li>
                        Client-side JavaScript extends the core language by supplying
                        objects to control a browser and its Document Object Model (DOM).
                        For example, client-side extensions allow an application to place
                        elements on an HTML form and respond to user events such as mouse
                        clicks, form input, and page navigation.
                        </li>
                        <li>
                        Server-side JavaScript extends the core language by supplying
                        objects relevant to running JavaScript on a server. For example,
                        server-side extensions allow an application to communicate with a
                        database, provide continuity of information from one invocation to
                        another of the application, or perform file manipulations on a
                        server.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section" id="What_you_should_already_know">
                <div className='article-header'>What you should already know</div>
                <div className='article-main'>
                    <p>This guide assumes you have the following basic background:</p>

                    <ul>
                        <li>
                        A general understanding of the Internet and the World Wide Web
                        (WWW).
                        </li>
                        <li>Good working knowledge of HyperText Markup Language (HTML).</li>
                        <li>
                        Some programming experience. If you are new to programming, try
                        one of the tutorials linked on the main page about JavaScript.
                        </li>
                    </ul>
                </div>
            </div>

            <div className="section" id="JavaScript_and_Java">
                <div className='article-header'>JavaScript and Java</div>
                <div className='article-main'>
                    <p>
                    JavaScript and Java are similar in some ways but fundamentally
                    different in some others. The JavaScript language resembles Java but
                    does not have Java's static typing and strong type checking.
                    JavaScript follows most Java expression syntax, naming conventions
                    and basic control-flow constructs which was the reason why it was
                    renamed from LiveScript to JavaScript.
                    </p>

                    <p>
                    In contrast to Java's compile-time system of classes built by
                    declarations, JavaScript supports a runtime system based on a small
                    number of data types representing numeric, Boolean, and string
                    values. JavaScript has a prototype-based object model instead of the
                    more common class-based object model. The prototype-based model
                    provides dynamic inheritance; that is, what is inherited can vary
                    for individual objects. JavaScript also supports functions without
                    any special declarative requirements. Functions can be properties of
                    objects, executing as loosely typed methods.
                    </p>
                    <p>
                    JavaScript is a very free-form language compared to Java. You do not
                    have to declare all variables, classes, and methods. You do not have
                    to be concerned with whether methods are public, private, or
                    protected, and you do not have to implement interfaces. Variables,
                    parameters, and function return types are not explicitly typed.
                    </p>
                </div>
            </div>

            <div className="section" id="Variables">
                <div className='article-header'>Variables</div>
                <div className='article-main'>
                    <p>
                    You use variables as symbolic names for values in your application.
                    The names of variables, called identifiers, conform to certain rules.
                    </p>
                    <p>
                    A JavaScript identifier must start with a letter, underscore (_), or
                    dollar sign ($); subsequent characters can also be digits (0-9).
                    Because JavaScript is case sensitive, letters include the characters
                    "A" through "Z" (uppercase) and the characters "a" through "z"
                    (lowercase).
                    </p>
                    <p>
                    You can use ISO 8859-1 or Unicode letters such as å and ü in
                    identifiers. You can also use the Unicode escape sequences as
                    characters in identifiers. Some examples of legal names are
                    Number_hits, temp99, and _name.
                    </p>
                </div>
            </div>

            <div className="section" id="Declaring_variables">
                <div className='article-header'>Declaring variables</div>
                <div className='article-main'>
                    You can declare a variable in three ways:
                    <p>
                    With the keyword var. For example, <code>var x = 42.</code> This
                    syntax can be used to declare both local and global variables.
                    </p>
                    <p>
                    By simply assigning it a value. For example,
                    <code>x = 42.</code> This always declares a global variable. It
                    generates a strict JavaScript warning. You shouldn't use this
                    variant.
                    </p>
                    <p>
                    With the keyword let. For example,<code> let y = 13.</code> This
                    syntax can be used to declare a block scope local variable. 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Article