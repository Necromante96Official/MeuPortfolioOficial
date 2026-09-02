@echo off
chcp 65001 >nul
title Enviar Commit - MeuPortfolioOficial
color 0B
echo.
echo  ===============================================
echo   Enviar Commit para MeuPortfolioOficial
echo   Necromante96Official ^<canalnecromante96@gmail.com^>
echo  ===============================================
echo.
git status --short
echo.
set /p msg="Digite a mensagem do commit (ENTER para usar 'update: portfolio'): "
if "%msg%"=="" set "msg=update: portfolio"
echo.
echo Mensagem: "%msg%"
echo.
choice /M "Deseja enviar este commit"
if errorlevel 2 (
    echo Cancelado.
    pause
    exit /b
)
echo.
echo --- Adicionando arquivos ---
git add -A
echo.
echo --- Verificando alteracoes ---
git diff --cached --quiet
if %errorlevel%==0 (
    echo Nenhuma alteracao para commitar.
    echo.
    choice /M "Criar commit vazio com esta mensagem"
    if errorlevel 2 (
        echo Cancele e faca alguma alteracao antes de commitar.
        pause
        exit /b
    )
    echo Criando commit vazio...
    git -c user.name="Necromante96Official" -c user.email="canalnecromante96@gmail.com" commit --allow-empty -m "%msg%"
) else (
    echo --- Criando commit ---
    git -c user.name="Necromante96Official" -c user.email="canalnecromante96@gmail.com" commit -m "%msg%"
)
if errorlevel 1 (
    echo Erro no commit.
    pause
    exit /b
)
echo.
echo --- Enviando para origin/master ---
git push origin master
if errorlevel 1 (
    echo Erro ao enviar. Verifique conexao e permissao.
    pause
    exit /b
)
echo.
echo  Commit "%msg%" enviado com sucesso!
echo  https://github.com/Necromante96Official/MeuPortfolioOficial
echo.
pause

