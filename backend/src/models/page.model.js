import mongoose from "mongoose";

const sectionSchema = new mongoose.Schema({
  name: String,
  content: String,
  image: String,
  isVisible: {
    type: Boolean,
    default: true
  }
});

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String
});

const pageSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true
    },

    // 🟢 IDENTIDAD
    name: String,
    bio: String,

    logo: String,

    // 🟢 HERO
    heroTitle: String,
    heroSubtitle: String,

    theme: {
      primary: String,
      secondary: String,
      accent: String,
      background: String
    },

    // 🟢 CONTENIDO
    sections: [sectionSchema],
    projects: [projectSchema],

    // 🟢 CONTACTO
    contactText: String,
    email: String,
    linkedin: String,
    github: String,

    // 🟢 FOOTER
    footerText: String,

    isPublic: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

export default mongoose.model("Page", pageSchema);