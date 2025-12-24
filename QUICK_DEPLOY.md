# Quick Deployment Guide

## 🚀 Fastest Way to Deploy (5 minutes)

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Ready for deployment"
git remote add origin <your-github-repo-url>
git push -u origin main
```

### Step 2: Deploy Backend (Render.com)

1. Go to https://render.com and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `convoapp-backend`
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Click "Create Web Service"
6. **Copy your backend URL** (e.g., `https://convoapp-backend.onrender.com`)

### Step 3: Deploy Frontend (Vercel.com)

1. Go to https://vercel.com and sign up/login
2. Click "New Project"
3. Import your GitHub repository
4. Configure:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Vite (auto-detected)
5. Add Environment Variable:
   - **Key**: `VITE_API_URL`
   - **Value**: Your backend URL from Step 2 (e.g., `https://convoapp-backend.onrender.com`)
6. Click "Deploy"

### Step 4: Update Frontend Environment Variable

After backend is deployed:
1. Go to Vercel → Your Project → Settings → Environment Variables
2. Update `VITE_API_URL` with your Render backend URL
3. Go to Deployments → Redeploy latest deployment

## ✅ Done!

Your app is now live! Share your Vercel frontend URL with others.

## 📝 Notes

- First request to Render backend may be slow (free tier spins down after inactivity)
- Both platforms offer free tiers
- See `DEPLOYMENT.md` for alternative platforms and detailed instructions

