# Blood Pressure App 📊

A modern, user-friendly web application for tracking and monitoring blood pressure readings. Built with Angular 19 and Firebase, this app helps users maintain their cardiovascular health by providing an intuitive interface for logging blood pressure measurements and viewing historical data.

## ✨ Features

- **📱 User Authentication**: Secure login and registration system powered by Firebase Auth
- **📊 Blood Pressure Tracking**: Log systolic, diastolic, and heart rate measurements
- **📈 Data Visualization**: View historical blood pressure readings with interactive charts
- **👤 User Profiles**: Customizable user profiles with display name management
- **💡 Health Tips**: Integrated health tips and recommendations
- **🗑️ Data Management**: Add, view, and delete blood pressure records
- **🎨 Modern UI**: Clean, responsive design using Angular Material components
- **☁️ Cloud Storage**: Data securely stored in Firebase Firestore

## 🚀 Live Demo

Visit the application: [Blood Pressure App]([https://github.com/matiolsz/BloodPressureApp#readme](https://bpapp2--bloodpressureapp-c1e59.europe-west4.hosted.app/dashboard)])

## 🛠️ Technology Stack

- **Frontend**: Angular 19 with TypeScript
- **UI Framework**: Angular Material
- **Backend**: Firebase (Authentication, Firestore Database)
- **Charts**: Custom blood pressure visualization
- **Deployment**: Firebase Hosting

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Angular CLI](https://angular.dev/tools/cli) (`npm install -g @angular/cli`)

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/matiolsz/BloodPressureApp.git
   cd BloodPressureApp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase** (if running locally)
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore Database
   - Add your Firebase configuration to the environment files

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200/` to view the application.

## 📖 Usage

### Getting Started
1. **Register/Login**: Create a new account or sign in with existing credentials
2. **Add Blood Pressure Reading**: Enter your systolic, diastolic, and heart rate values
3. **View History**: Check your historical readings and trends
4. **Manage Profile**: Update your display name and account information
5. **Health Tips**: Access personalized health recommendations

### Blood Pressure Categories
The app helps you understand your readings:
- **Normal**: < 120/80 mmHg
- **Elevated**: 120-129/< 80 mmHg
- **High Blood Pressure (Stage 1)**: 130-139/80-89 mmHg
- **High Blood Pressure (Stage 2)**: ≥ 140/≥ 90 mmHg

## 🏗️ Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── dashboard/          # Main dashboard component
│   │   ├── login/             # Authentication components
│   │   ├── register/          # User registration
│   │   ├── blood-pressure-chart/ # Data visualization
│   │   ├── health-tips/       # Health recommendations
│   │   └── models/            # TypeScript interfaces
│   ├── services/
│   │   ├── auth.service.ts    # Firebase authentication
│   │   ├── blood-pressure.service.ts # Data management
│   │   └── health-tips.service.ts # Health tips API
│   └── guards/
│       └── auth.guard.ts      # Route protection
├── assets/
│   └── photos/                # Application images
└── environments/              # Configuration files
```

## 🧪 Testing

Run the test suite to ensure everything is working correctly:

```bash
# Unit tests
npm test

# End-to-end tests
npm run e2e
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Firebase
```bash
firebase deploy
```

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### Development Guidelines
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

- **GitHub**: [@matiolsz](https://github.com/matiolsz)

## 🐛 Issues

If you find any bugs or have feature requests, please [open an issue](https://github.com/matiolsz/BloodPressureApp/issues).

## 📞 Support

For support and questions, please contact us through GitHub issues or create a discussion in the repository.

---

<div align="center">
  <p>Made with ❤️ for better health monitoring</p>
  <p>⭐ Star this repository if you find it helpful!</p>
</div>
