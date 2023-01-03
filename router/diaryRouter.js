import express from 'express'
import mongoose from 'mongoose'
import User from '../modals/userModal.js'
const router = express.Router()

/* 
  - Yeni (diary) verisi ekleme ✓
  - Diary verisi getirme ✓
  - Diary verisi silme ✓
  - Diary verisi Güncelleme ✓
*/

router.get('/:id', async (req, res) => {
  try {
      const user = await User.findById(req.params.id)
      if (!user) throw new Error('No user')

      res.status(200).json(user.diaries)
  } catch (error) {
      res.status(500).json({ message: error.message })
  }
})

router.post('/:id', async (req, res) => {
    const user = await User.findById(req.params.id)
    try {
      const diaryPosting = await user.diaries.push({
        title: req.body.title,
        description: req.body.description
      });
      await user.save()
      res.sendStatus(200).send(diaryPosting)
    } catch (error) {
      res.sendStatus(500).send(error);
    }
});

router.delete('/user/:userId/diary/:diaryId', (req, res) => {
  // İkinci id parametresine ait değeri alın
  const userId = req.params.userId;
  const diaryId = req.params.diaryId;

  // Kullanıcıyı bulun ve diary verisini silin
  User.findById(userId, (err, user) => {
    if (err) {
      return res.send(err);
    }

    // Kullanıcı içinde bulunan diary verisini bulun ve silin
    const diaryIndex = user.diaries.indexOf(diaryId);
    user.diaries.splice(diaryIndex, 1);
    user.save((err) => {
      if (err) {
        return res.send(err);
      }

      return res.send('Veri başarıyla silindi');
    });
  });
});



router.put('/:userId/diary/:diaryId', (req, res) => {
  // İkinci id parametresine ait değeri alın
  const userId = req.params.userId;
  const diaryId = req.params.diaryId;

  // Kullanıcıyı bulun ve diary verisini değiştirin
  User.findById(userId)
    .then((user) => {
      const diary = user.diaries.id(diaryId); // returns a matching subdocument
      diary.set(req.body); 
      return user.save(); 
    })
    .then((user) => {
      res.send({ user });
    })
    .catch(e => res.status(400).send(e));
});


export default router