# jbadge (@jeremiah-ndiritu/jbadge)

Lightweight **React badge components** for status, roles, and labels.
Simple, customizable, and dependency-free.

---

## ✨ Features

* Small and lightweight
* No CSS framework required
* Works with React `>=16`
* Simple API
* Easy to style and extend

---

## 📦 Installation

```bash
npm install @jeremiah-ndiritu/jbadge
```

or

```bash
pnpm add @jeremiah-ndiritu/jbadge
```

or

```bash
yarn add @jeremiah-ndiritu/jbadge
```

---

## 🚀 Usage

```jsx
import { RoleBadge, StatusBadge } from "@jeremiah-ndiritu/jbadge"

function App() {
  return (
    <div>
      <RoleBadge role="admin" />
      <StatusBadge status="active" />
    </div>
  )
}
```

---

## 🧩 Components

### RoleBadge

Displays a role label.

```jsx
<RoleBadge role="admin" />
<RoleBadge role="official" />
<RoleBadge role="user" />
```

Props:

| prop | type   | default  | description     |
| ---- | ------ | -------- | --------------- |
| role | string | `"user"` | Role to display |

---

### StatusBadge

Displays a status indicator.

```jsx
<StatusBadge status="active" />
<StatusBadge status="pending" />
<StatusBadge status="error" />
<StatusBadge status="success" />
```

Props:

| prop     | type      | default    | description  |
| -------- | --------- | ---------- | ------------ |
| status   | string    | `"active"` | Status label |
| children | ReactNode | status     | Custom label |

Example:

```jsx
<StatusBadge status="success">Deployed</StatusBadge>
```

---

## 🎨 Styling

`jbadge` uses inline styles by default so it works without any CSS setup.

You can easily override styles:

```jsx
<span style={{ fontSize: "14px" }}>
  <StatusBadge status="active" />
</span>
```

---

## 🛠 Development

Clone the repository:

```bash
git clone https://github.com/jeremiah-ndiritu/jbadge
cd jbadge
```

Install dependencies:

```bash
pnpm install
```

Build the package:

```bash
pnpm build
```

---

## 📄 License

ISC

---

## 👨‍💻 Author

Jeremiah Ndiritu
