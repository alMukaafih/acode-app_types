async function _acodeTest() {
  acode.setPluginInit("com.example.plugin", (_baseUrl, $page, _cache) => {
    const { commands } = editorManager.editor;
    commands.addCommand({
      name: "example-plugin",
      bindKey: { win: "Ctrl-Alt-E", mac: "Command-Alt-E" },
      exec: () => {
        $page.innerHTML = `
        <h1>Example Plugin</h1>
        <p>This is an example plugin.</p>
      `;
        $page.show();
      },
    });
  });

  acode.setPluginUnmount("com.example.plugin", () => {
    const { commands } = editorManager.editor;
    commands.removeCommand("example-plugin");
  });

  acode.define("say-hello", {
    hello: () => {
      console.log("Hello World!");
    },
  });

  // You can access the module using the module name

  acode.require("say-hello").hello(); // Hello World!

  acode.exec("console"); // Opens the console

  acode.registerFormatter("com.example.plugin", ["js"], async () => {
    // formats the active file if supported
    const text = editorManager.editor.session.getValue();
    // format the text
    editorManager.editor.session.setValue(text);
  });

  acode.addIcon("my-icon", "https://example.com/icon.png");

  acode.pushNotification("Hello", "This is a notification", {
    icon: "my-icon",
    autoClose: false,
    action: () => {
      console.log("Notification clicked!");
    },
    type: "success",
  });

  await acode.installPlugin("com.example.pluginid", "mypluin.id");

  const _file = acode.newEditorFile("example.js", {
    text: 'console.log("Hello World");',
    editable: true,
  });
}

namespace ui {
  export namespace dialogs {
    export function alert() {
      const alert = acode.require("alert");

      const handleOnHide = () => {
        window.toast("Alert modal closed", 4000);
      };

      alert("Title of Alert", "The alert body message..", handleOnHide);
    }

    export async function confirm() {
      const confirm = acode.require("confirm");

      const confirmation = await confirm("Warning", "Are you sure?");
      if (confirmation) {
        window.toast("File deleted...", 4000);
      } else {
        window.toast("File not deleted...", 4000);
      }
    }

    export async function colorPicker() {
      const colorPicker = acode.require("colorPicker");

      const selectedColor = await colorPicker("#ff0000");
      console.log(`Selected Color: ${selectedColor}`);
    }

    export function loader() {
      const loader = acode.require("loader");

      // Create the loader with specified options
      loader.create("Title Text", "Message...", {
        timeout: 5000,
        callback: () => window.toast("Loading cancelled", 4000),
      });

      // Hide the loader after 2 seconds
      setTimeout(() => {
        loader.hide();
      }, 2000);

      // Show the loader after 4 seconds
      setTimeout(() => {
        loader.show();
      }, 4000);

      // Destroy the loader after 6 seconds
      setTimeout(() => {
        loader.destroy();
      }, 6000);

      // example of `showTitleLoader()` & `removeTitleLoader()`
      loader.showTitleLoader();

      // remove the title loader after 4 seconds
      setTimeout(() => {
        loader.removeTitleLoader();
      }, 4000);
    }

    export async function multiPrompt() {
      const multiPrompt = acode.require("multiPrompt");
      const _myPrompt = await multiPrompt(
        "Enter your name & age",
        [
          { type: "text", id: "name" },
          { type: "number", id: "age" },
        ],
        "https://example.com/help/",
      );
    }

    export async function prompt() {
      const prompt = acode.require("prompt");

      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      const options = {
        match: emailRegex,
        required: true,
        placeholder: "Enter your email",
        test: (value: string) => emailRegex.test(value),
      };

      const _userEmail = await prompt(
        "What is your email?",
        "",
        "email",
        options,
      );
    }

    export async function select() {
      const select = acode.require("select");
      const _result = await select("Pick a color", ["Red", "Green", "Blue"]);

      const items = [
        ["edit", "Edit File", "edit", false],
        ["delete", "Delete File", "delete", false],
        ["share", "Share File", "share", true],
      ];

      const options = {
        hideOnSelect: true,
        default: "edit",
        onCancel: () => console.log("Selection cancelled"),
      };

      const _action = await select("File Actions", items, options);

      const features = [
        { value: "sync", text: "Cloud Sync", checkbox: true },
        { value: "backup", text: "Auto Backup", checkbox: false },
        {
          value: "formatting",
          text: "Code Formatting",
          checkbox: true,
        },
      ];

      const _selected = await select("Enable Features", features, {
        hideOnSelect: false,
      });

      const users = [
        {
          value: "john",
          text: "John Smith",
          icon: "letters",
          letters: "JS",
        },
        {
          value: "jane",
          text: "Jane Doe",
          icon: "letters",
          letters: "JD",
        },
      ];

      const _selectedUser = await select("Choose User", users);
    }

    export function dialogBox() {
      const DialogBox = acode.require("dialogBox");
      const myDialogBox = DialogBox(
        "Title", // Title of the dialog box
        "<h1>Dialog content</h1>", // Content of the dialog box (HTML supported)
        "hideButtonText", // Text for the hide button
        "cancelButtonText", // Text for the cancel button
      );

      myDialogBox.hide();

      myDialogBox.wait(1000);

      myDialogBox.onhide(() => {
        console.log("Dialog box is hidden");
      });

      myDialogBox.onclick((e) => {
        const target = e.target;
        console.log(target, "is clicked");
      });

      myDialogBox.then(() => {
        console.log("OK button is clicked");
      });

      myDialogBox.ok(() => {
        console.log("OK button is clicked");
      });

      myDialogBox.cancel(() => {
        console.log("Cancel button is clicked");
      });

      const c = new HTMLButtonElement();
      c.onclick;
    }
  }

  export function toast() {
    const toast = acode.require("toast");

    toast("Hello, World!", 3000);

    // or
    window.toast("Hello, World!", 3000);
  }

  export function tutorial() {
    const tutorial = acode.require("tutorial");
    // Basic text message
    tutorial("welcome-msg", "Welcome to my plugin!");

    // HTML message
    const msgEl = document.createElement("div");
    msgEl.innerHTML = `
		<h3>Getting Started</h3>
		<p>Click the button below to begin:</p>
		<button onclick="startTutorial()">Start</button>
`;
    tutorial("start-guide", msgEl);

    // Function with hide callback
    tutorial("feature-intro", (hide) => {
      const container = document.createElement("div");
      const closeBtn = document.createElement("button");
      closeBtn.textContent = "Got it";
      closeBtn.onclick = hide;
      container.appendChild(closeBtn);
      return container;
    });
  }

  export function selectionMenu() {
    const selectionMenu = acode.require("selectionMenu");

    const onclick = () => {
      // Action to perform when the menu item is clicked
      console.log("Menu item clicked!");
    };

    // Adding a new item to the selection menu
    selectionMenu.add(onclick, "Hi", "all");
  }
}

namespace interfaceApi {
  export function contextMenu() {
    const contextMenu = acode.require("contextMenu");

    const menu = contextMenu("Menu Content", {
      top: 50,
      left: 100,
      items: [
        ["Item 1", "action1"],
        ["Item 2", "action2"],
      ],
      onselect(action) {
        console.log("Selected:", action);
      },
    });

    // Show the menu
    menu.show();

    // Hide the menu
    menu.hide();
  }

  export function sideBarApps() {
    const sideBarApps = acode.require("sidebarApps");

    sideBarApps.add(
      "icon_class", // Icon for the app
      "my_app_id", // Unique ID
      "My App", // Display title
      (container) => {
        // Initialize app UI
        container.innerHTML = "<div>App Content</div>";
      },
      false, // Add to end of sidebar
      (_container) => {
        // Handle when app is selected
        console.log("App selected");
      },
    );

    const _container = sideBarApps.get("my_app_id");

    sideBarApps.remove("my_app_id");
  }

  export function sideButton() {
    const SideButton = acode.require("sideButton");

    const sideButton = SideButton({
      text: "My Side Button",
      icon: "my-icon",
      onclick() {
        console.log("clicked");
      },
      backgroundColor: "#fff",
      textColor: "#000",
    });

    // Show the side button
    sideButton.show();

    // Hide the side button
    sideButton.hide();
  }
}

namespace utils {
  export function aceModes() {
    const aceModes = acode.require("aceModes");

    const _onClick = () => {
      // Action to perform when the menu item is clicked
      console.log("Custom Mode Menu Item Clicked!");
    };

    // Adding the custom mode
    aceModes.addMode("myMode", ["mymode"], "My Custom Mode");

    // Assuming you have the necessary mode definitions loaded for 'myMode'
    // Example of using the custom mode in the editor
    const editor = editorManager.editor;
    editor.session.setMode("ace/mode/myMode");

    // Removing the custom mode
    aceModes.removeMode("myMode");
  }

  export function encodings() {
    const encodings = acode.require("encodings");

    async function example() {
      const text = "Hello World!";
      const charset = "utf-8";

      try {
        // Encoding text
        const encoded = await encodings.encode(text, charset);
        console.log("Encoded:", encoded);

        // Decoding text
        const decoded = await encodings.decode(encoded, charset);
        console.log("Decoded:", decoded);
      } catch (error) {
        console.error("Encoding/Decoding error:", error);
      }
    }

    example();
  }

  export async function fileSystem() {
    // Importing via requiring 'fs'
    const fs = acode.require("fs");

    const filesystem = fs("url");

    const _link1 = fs("http://example.com");
    const _link2 = fs("https://example.com");

    if (filesystem.lsDir) {
      const _allFiles = await filesystem.lsDir();
    }

    const _fileContent = await filesystem.readFile();

    await filesystem.writeFile("content to write");

    const _createdFile = await filesystem.createFile(
      "filename.js",
      "file content",
    );

    const _createdDirectory = await filesystem.createDirectory("newDirectory");

    await filesystem.delete();

    const _copiedItem = await filesystem.copyTo("destination");

    const _movedItem = await filesystem.moveTo("destination");

    const _renamedItem = await filesystem.renameTo("newName");

    const _doesExist = await filesystem.exists();
  }

  export function projects() {
    const projects = acode.require("projects");

    async function addNewProject() {
      const projectFiles = {
        "index.html": "<!DOCTYPE html>...",
        "css/index.css": "/* CSS file */",
        "js/index.js": "// JavaScript file",
      };

      const iconSrc =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABIUExURUdwTORPJuRPJuNOJeRPJuNQJ+RPJuNOJuNPJuROJeRPJuNOJuRPJuRQJONPJuNPJeVQI+NPJeROJuNPJuZPJ+NOJuRPJuNPJkmKsooAAAAXdFJOUwA6h5uxKGh/60/VE8BBll8izqXdDHT3jnqTYwAAAQRJREFUGBl9wY22azAURtGFhMS/Vvu9/5veHeGMMrhzAvoPkqBHgWTRo4XE6ZEjqfSoImn0qCGpZQYuBpmaJMpMXESZSFLIfLioZQoSLzMCzYmMJ+lkXsBbVx0bmR546YosSGqBUheBbJEUuFgkLWROpuMsSHJklYznTKYiK2WaHwWsMiXZRxceZpkP2SQzGO1mKGQmsigTwWvXQZSJZIVMDZ12K9QyBdks0wBDuUjvVw00MjNZJ1OxmWc2o0zHLkhynl9OUuDQyoS+jGx8PfZfSS2HXrvg6unVatdzcLrlOIy6NXIog26Ekj9+qlqdtNXkOSua/qvNt28Kbq1xfL/HuPLjH4f8MW+juHZUAAAAAElFTkSuQmCC";

      projects.set("newProject", async () => projectFiles, iconSrc);

      // List all projects
      const projectList = projects.list();
      console.log("Project List:", projectList);

      // Get details of the newly added project
      const newProjectDetails = projects.get("newProject");
      console.log("New Project Details:", newProjectDetails);
    }

    addNewProject();
  }

  export function url() {
    const Url = acode.require("Url");

    const _basename = Url.basename("ftp://localhost/foo/bar/index.html");
    // Output: 'index.html'

    const _areSame = Url.areSame("https://example.com", "https://example.com");
    // Output: true

    const _extname = Url.extname("ftp://localhost/foo/bar/index.html");
    // Output: '.html'

    const _safeUrl = Url.safe(
      "https://www.example.com/path/to/file.html?query=string#hash",
    );
    // Output: 'https://www.example.com/path/to/file.html%3Fquery%3Dstring%23hash'

    const _pathname = Url.pathname("ftp://myhost.com/foo/bar/index.html");
    // Output: '/foo/bar'

    const _dirname = Url.dirname("ftp://localhost/foo/bar");
    // Output: 'ftp://localhost/foo/'

    const _parsedUrl = Url.parse("https://example.com/path?query=string");
    // Output: { url: 'https://example.com/path', query: '?query=string' }

    const urlObj = {
      protocol: "https:",
      hostname: "example.com",
      path: "path/to/page",
      query: { key: "value" },
    } as const;
    const _formattedUrl = Url.formate(urlObj);
    // Output: 'https://example.com/path/to/page?key=value'

    const _hiddenPasswordUrl = Url.hidePassword(
      "ftp://user:password@localhost/foo/bar",
    );
    // Output: 'ftp://user@localhost/foo/bar'

    const _decodedUrl = Url.decodeUrl(
      "https://user:pass@host.com:8080/path?query=string",
    );
    // Output: { username: 'user', password: 'pass', hostname: 'host.com', pathname: '/path', port: 8080, query: { query: 'string' } }

    const _trimmedUrl = Url.trimSlash("https://example.com/path/");
    // Output: 'https://example.com/path'
  }
}
